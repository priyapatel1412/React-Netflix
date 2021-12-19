const express = require("express");
const dbConfig = require("./app/config");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./app/routes/auth");
const userRoute = require("./app/routes/users");
const movieRoute = require("./app/routes/movies");
const listRoute = require("./app/routes/lists");
dotenv.config();

const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    `mongodb+srv://priyanka:${process.env.MONGODB_PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

//to accept json fie
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
