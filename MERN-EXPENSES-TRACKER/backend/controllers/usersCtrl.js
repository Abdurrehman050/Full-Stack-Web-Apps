const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
//! User Registration

const usersController = {
  //!Register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //! validate
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }
    //! check if user already exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    //! hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //! create user and save it into DB
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
    res.json({ message: "Register" });
  }),
  //!Login
  login: asyncHandler(async (req, res) => {
    //! Get the user data
    const { email, password } = req.body;
    //! if email is correct
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid login credentials");
    }
    //! compare the user password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid login credentials");
    }
    //! generate the token for user
    const token = jwt.sign({ id: user._id }, "secretkey", {
      expiresIn: "30d",
    });
    //! send the response
    res.json({
      message: "Login success",
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }),
  //!Profile
  profile: asyncHandler(async (req, res) => {
    //! Find the user
    //! console.log(req.user); // getting the user ID
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
    //! send the response
    res.json({ username: user.username, email: user.email });
  }),
  //! change password
  changeUserPassword: asyncHandler(async (req, res) => {
    const { newPassword } = req.body;
    //! Find the user
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
    //! hash the new password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    //! ReSave
    await user.save();
    validateBeforeSave: false,
      //! send the response
      res.json({ message: "Password changed successfully" });
  }),
  //! update user profile
  updateUserProfile: asyncHandler(async (req, res) => {
    const { email, username } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      {
        username,
        email,
      },
      {
        new: true,
      }
    );
    res.json({ message: "User Profile updated successfully", updatedUser });
  }),
};

module.exports = usersController;
