//require express
const express = require("express");
const path = require("path");

let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request for /api/notes
const apiController = require("./routes/apiRoutes");
app.use(apiController);

const htmlController = require("./routes/htmRoutes");
app.use(htmlController);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use('/notes', apiController);
app.use("/", htmlController)

app.listen(PORT, () => {
  console.log("app listening on port ", PORT);
});

