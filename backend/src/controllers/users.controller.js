/** @format */

const usersController = {};

usersController.getUsers = (req, res) => res.json({ message: "GET USERS" });
usersController.getUser = (req, res) => res.json({ message: "GET USER" });
usersController.createUser = (req, res) =>
  res.json({ message: "CREATE USERS" });
usersController.updateUser = (req, res) => res.json({ message: "GET USERS" });

module.exports = usersController;
