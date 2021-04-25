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
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ message: "create notes" });
};

notesController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesController.updateNote = async (req, res) => {
  //console.log(req.params.id, req.body);
  const { title, content, author, date } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      author,
      date,
    }
  );
  res.json({ message: "UPDATE" });
};

notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "DELETE" });
};
module.exports = notesController;
