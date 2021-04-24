/** @format */

const usersController = {};
const Users = require("../models/User");

usersController.getUsers = async (req, res) => {
  const users = await Users.find();
  res.json(users);
};

usersController.getUser = async (req, res) => {
  const user = await Users.findById(req.params.id);
  res.json(user);
};

usersController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new Users({ username });
  await newUser.save();
  res.json({ message: "CREATE USERS" });
};

usersController.updateUser = async (req, res) => {
  const { username } = req.body;
  await Users.findByIdAndUpdate({ _id: req.params.id }, { username });
  res.json({ message: "update USER" });
};

usersController.deleteUser = async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.json({ message: "delete USER" });
};

module.exports = usersController;
