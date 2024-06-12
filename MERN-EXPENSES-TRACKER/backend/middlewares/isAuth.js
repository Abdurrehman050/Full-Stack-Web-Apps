const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  //! console.log(req.headers);
  //! Get the token from the header
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];
  //! console.log(token);
  //! verify the token
  const verifyToken = jwt.verify(token, "secretkey", (err, decoded) => {
    //! console.log(decoded);
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
  if (verifyToken) {
    //! Save the user req obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired, login again");
    next(err);
  }
};

module.exports = isAuthenticated;
