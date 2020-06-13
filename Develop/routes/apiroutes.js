//require the class //files to you can use the functions you created
const NoteBook = require("../db/notebook.js");
const express = require("express");
const path = require("path");
const app = express();
let notebook = new NoteBook();
//call the getNotes() from the class that you required
// res.json(note) like

app.get("/api/notes", function (req, res) {
  // notes = Note.getNotes();
  // res.json(notes)
  res.json(notebook.getNotes());
});

//post request will be the same as get

app.post("/api/notes", function (req, res) {
  notebook.addNote(req.body);
  res.json(true);
});

// call the deleteNote()
// delete request for /api/notes/:id
//if you don't add teh id the delete will delete all the notes

app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  notebook.deleteNote(id);
  res.json(true);
});

module.exports = app;
