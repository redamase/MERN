/** @format */
// const express = require("express");
// const cors = require("cors");
// const app = express();

import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import Homeworks from "./routes/homeworks";
import AuthRoutes from "./routes/auth";
import UseruRoutes from "./routes/users";
import "./database";
import { createRoles } from "./libs/innitialSetup";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    autor: app.get("pkg").author,
    name: app.get("pkg").name,
    vesion: app.get("pkg").version,
  });
});

// settings
//app.set("port", process.env.PORT || 3000);

// middlewares
//app.use(cors());
app.use(express.json());

// routes
// app.use("/api/users", require("./routes/users"));
// app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", AuthRoutes);
app.use("/api/homeworks", Homeworks);
app.use("/api/users", UseruRoutes);

module.exports = app;
