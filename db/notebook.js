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


  //get notes()
  // inside of this function you're going want to read from the db.json file the contents 
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
    //check against all of the notes to see which oen has the id you're looking to delete
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
  }
}

module.exports = Notebook;
