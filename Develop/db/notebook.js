//require uuidv4 package to generate an id - id - : uuidv4();

const http = require("http");
const fs = require("fs");
// const { uuid } = require("uuidv4");

class Notebook {
  constructor() {
    this.notes = [];
  }

  //get notes()
  // inside of this function you're going want to read from the db.json file the contests od the json file will be displayed on the page to read a file - readFile() which is a part of the 'fs' package

  //addNotes()

  //deleteNotes()
  //check against all opf theh notes to see which oen has the id you're looking to delete
  // call getNotes() and filter results to find the id you're looking for an return the ones that don't match
}

module.exports = Notebook;
