//require uuidv4 package to generate an id - id - : uuidv4();

const http = require("http");
const fs = require("fs");
const { uuid } = require("uuidv4");
const path = require("path");

let db = require("./db.json");

class Notebook {
  constructor() {
    this.notes = db;
  }

  // const notes = {
  //   id: '80',
  //   notesTitle: title,
  //   notesText: text
  // }
  //get notes()
  // inside of this function you're going want to read from the db.json file the contests od the json file will be displayed on the page to read a file - readFile() which is a part of the 'fs' package
  getNotes() {
    return this.notes;
  }

  addNote(note) {
    note.id = uuid();
    this.notes.push(note);
    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(this.notes),
      (err) => {
        if (err) throw err;
        console.log("note saved!");
      }
    );
  }

  deleteNote(id) {
    //check against all opf the notes to see which oen has the id you're looking to delete
    this.notes = this.notes.filter((note) => {
      return note.id !== id;
    });

    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(this.notes),
      (err) => {
        if (err) throw err;
        console.log("note saved!");
      }
    );
    // call getNotes() and filter results to find the id you're looking for an return the ones that don't match
  }
}

module.exports = Notebook;
