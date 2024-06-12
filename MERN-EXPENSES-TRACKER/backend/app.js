const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/UserRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

//! Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://abdurrehmanfsd07:idhMQpDcfjJHHoD3@manibhai-cluster.dj0tw1m.mongodb.net/mern-expenses",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//! Cors config
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//! Middleware
app.use(express.json()); //? pass incoming json data

//! Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
//! Error
app.use(errorHandler);

//!start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
