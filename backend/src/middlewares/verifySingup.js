/** @format */

import { ROLES } from "../models/Rol";
import User from "../models/User";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const username = await User.findOne({ username: req.body.username });
  if (username) {
    return res.status(401).json({ messaje: "the username already exits" });
  }
  const email = await User.findOne({ email: req.body.email });

  if (email) {
    return res.status(401).json({ messaje: "the email already exits" });
  }
};

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      console.log(ROLES);
      if (!ROLES.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exist` });
      }
    }
  }
  next();
};
