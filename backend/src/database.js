/** @format */
// const mongoose = require("mongoose");
import mongoose from "mongoose";

//const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "error";
mongoose.connect(
  "mongodb+srv://redamase:Redamase110.@redamase.npf1q.mongodb.net/mern",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.once("open", () => console.log("DB is connected"));
