/** @format */

import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Rol";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ messaje: "not token provided" });
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { passwowd: 0 });
    if (!user) return res.status(404).json({ messaje: "no user found" });
    //console.log(user);
    next();
  } catch (error) {
    return res.status(401).json({ messaje: "Unauthorized" });
  }
};

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  //console.log(roles);

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }
  return res.status(403).json({ messaje: "require moderator role" });
};
export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  //console.log(roles);

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ messaje: "require moderator role" });
};
export const isAdMode = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  //console.log(roles);

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin" || roles[i].name === "moderator") {
      next();
      return;
    }
  }
  return res.status(403).json({ messaje: "require moderator role" });
};
