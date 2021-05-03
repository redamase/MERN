/** @format */

import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Rol";

export const singUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  // const userFound = User.find({ email });

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
    //console.log(newUser.roles);
  }
  //console.log(newUser.roles);
  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 600, // 10 minutos
  });
  //console.log(newUser);
  res.status(200).json({ token });
};
export const login = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound) return res.status(400).json({ messaje: "User not found" });
  const matchPassword = await User.comparatePasswords(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: "", messaje: "Invalid Password" });

  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 600,
  });
  res.status(200).json({ token });
};
export const logout = async (req, res) => {
  res.status(200).json({ token: null });
};
