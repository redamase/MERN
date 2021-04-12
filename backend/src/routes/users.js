/** @format */

const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  updateUser,
  getUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers);

router.route("/:id").get(getUser).post(createUser).put(updateUser);
module.exports = router;
