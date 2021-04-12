/** @format */

const notesController = {};
const Note = require("../models/Note");

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};
notesController.createNotes = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  await newNote.save();
  res.json({ message: "create notes" });
};

notesController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};
notesController.updateNote = (req, res) => res.json({ message: "UPDATE" });
notesController.deleteNote = (req, res) => res.json({ message: "DELETE" });

module.exports = notesController;
