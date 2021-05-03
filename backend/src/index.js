/** @format */
// require("dotenv").config();
// const app = require("./app");
// require("./database");
import app from "./app";
// async function main() {
//   await app.listen(app.get("port"));
//   console.log("Server on port", app.get("port"));
// }
app.listen(4000);
