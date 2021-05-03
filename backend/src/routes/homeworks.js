/** @format */

import { Router } from "express";

const router = Router();
import * as homeworksController from "../controllers/homeworks.controller";
import { authJWT } from "../middlewares";
// const { Router } = require("express");
// const {
//   getHomeworks,
//   createHomeworks,
//   updateHomework,
//   deleteHomework,
//   getHomework,
// } = require("../controllers/homeWorks.controller");
//const router = Router();

router
  .route("/")
  .get(homeworksController.getHomeworks)
  .post(
    [authJWT.verifyToken, authJWT.isModerator],
    homeworksController.createHomeworks
  );

router
  .route("/:id")
  .get(homeworksController.getHomework)
  .put(authJWT.verifyToken, homeworksController.updateHomework)
  .delete(
    [authJWT.verifyToken, authJWT.isAdMode],
    homeworksController.deleteHomework
  );

export default router;
