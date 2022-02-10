// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});
//snacks routes
app.use("/snacks", snackController);

app.get("*", (req, res) => {
  res.status(404).send({ error: "page not found" });
});

// EXPORT
module.exports = app;
