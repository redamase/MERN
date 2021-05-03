/** @format */

import { Router } from "express";

const router = Router();
import * as authController from "../controllers/auth.controller";
import { verifySingup } from "../middlewares";

router.post(
  "/singup",
  [verifySingup.checkDuplicateUsernameOrEmail, verifySingup.checkRolesExisted],
  authController.singUp
);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
