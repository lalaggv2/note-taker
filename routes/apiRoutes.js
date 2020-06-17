//require the class //files to you can use the functions you created
const NoteBook = require("../db/notebook.js");
const router = require("express").Router();
const path = require("path");
let notebook = new NoteBook();
//call the getNotes() from the class that you required
// res.json(note) like

router.get("/api/notes", function (req, res) {
  // notes = Note.getNotes();
  // res.json(notes)
  res.json(notebook.getNotes());
});

router.post('./notebook', (req, res) => {
  res.send("save note");
});

//post request will be the same as get

router.post("/api/notes", function (req, res) {
  notebook.addNote(req.body);
  res.json(true);
});

// call the deleteNote()
// delete request for /api/notes/:id
//if you don't add teh id the delete will delete all the notes

router.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  notebook.deleteNote(id);
  res.json(true);
});

module.exports = router;
