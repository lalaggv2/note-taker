//require express
const express = require("express");

let server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static("./public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//get request for /api/notes
const apiController = require("./routes/apiroutes");
server.use(apiController);

const htmlController = require("./routes/htmRoutes");
server.use(htmlController);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/notes', apiController);
app.use("/", htmlController)

server.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});



// var currentNotes = window.location.origin;

// $.ajax{url: currentUrl + "/api/notes.html" method: 'GET'