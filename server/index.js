const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors({
  origin:["https://w3automation-frontend.vercel.app"],
  methods:['POST','GET'],
  credentials: true
}))

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connection established"))
  .catch((err) => console.log("database connection error", err));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));
