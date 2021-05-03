/** @format */

import { Router } from "express";

const router = Router();
import { authJWT, verifySingup } from "../middlewares";

// const {
//   getUsers,
//   createUser,
//   updateUser,
//   getUser,
//   deleteUser,
// } = require("../controllers/users.controller");

import * as userController from "../controllers/users.controller";
router
  .route("/")
  .get(userController.getUsers)
  .post(
    [
      authJWT.verifyToken,
      authJWT.isAdMode,
      verifySingup.checkRolesExisted,
      verifySingup.checkDuplicateUsernameOrEmail,
    ],
    userController.createUser
  );

router.route("/me").get([authJWT.verifyToken], userController.getProfile);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
