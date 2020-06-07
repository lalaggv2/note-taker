//require the class //files to you can use the functions you created
const Note = require("../db/notebook.js");
const express = require("express");
const path = require("path");
const app = express();

app.get("/api/notes", function (req, res) {
  // notes = Note.getNotes();
  // res.json(notes)
  res.json([]);
});

app.post("/api/notes", function (req, res) {
  res.json([]);
});

app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  res.json([]);
});

module.exports = app;

//call the getNotes() from the class that you required
// res.json(note) like

//post request will be the same as teh get

// delete request for /api/notes/:id
//if you don't add teh id the delete will delete all the notes

// call the deleteNote()
