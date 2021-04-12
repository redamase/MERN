/** @format */

const { Router } = require("express");
const {
  getNotes,
  createNotes,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/notes.controller");
const router = Router();
router.route("/").get(getNotes).post(createNotes);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
