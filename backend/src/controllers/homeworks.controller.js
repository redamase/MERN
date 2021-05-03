/** @format */

// const homeWorksController = {};
// const homeWorksController = require("../models/HomeWorks");

import Homework from "../models/HomeWorks";

export const getHomeworks = async (req, res) => {
  const homeworks = await Homework.find();
  res.json(homeworks);
};
export const createHomeworks = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newHomework = new Homework({
    title,
    content,
    date,
    author,
  });
  const homeworkSaved = await newHomework.save();
  res.status(201).json({ homeworkSaved });
};

export const getHomework = async (req, res) => {
  const homework = await Homework.findById(req.params.id);
  res.status(200).json(homework);
};

export const updateHomework = async (req, res) => {
  const { title, content, author, date } = req.body;
  const updateHomework = await Homework.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      author,
      date,
    },
    {
      new: true,
    }
  );
  res.status(200).json({ updateHomework });
};

export const deleteHomework = async (req, res) => {
  await Homework.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: "DELETE" });
};
