/** @format */

//const usersController = {};
//const Users = require("../models/User");
import Users from "../models/User";

// usersController.getUsers = async (req, res) => {
//   const users = await Users.find();
//   res.json(users);
// };

// usersController.getUser = async (req, res) => {
//   const user = await Users.findById(req.params.id);
//   res.json(user);
// };

// usersController.createUser = async (req, res) => {
//   const { username } = req.body;
//   const newUser = new Users({ username });
//   await newUser.save();
//   res.json({ message: "CREATE USERS" });
// };

// usersController.updateUser = async (req, res) => {
//   const { username } = req.body;
//   await Users.findByIdAndUpdate({ _id: req.params.id }, { username });
//   res.json({ message: "update USER" });
// };

// usersController.deleteUser = async (req, res) => {
//   await Users.findByIdAndDelete(req.params.id);
//   res.json({ message: "delete USER" });
// };

//module.exports = usersController;
export const createUser = async (req, res) => {
  res.json({ message: "create user" });
};

export const getUsers = async (req, res) => {
  //   const users = await Users.find();
  //   res.json(users);
};

export const getProfile = async (req, res) => {
  const user = await Users.findById(req.userId, { password: 0 });
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  res.status(200).json(user);
};
