/** @format */

const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;
