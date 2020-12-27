// IMPORTING PACKAGES
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// DEFINING PORT
const PORT = process.env.PORT || 3001;

// CREATING INSTANCE OF EXPRESS
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECTING TO MONGODB DATABASE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thesocialsite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// TESTING CONNECTION TO DATABASE
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// TESTING GET REQUEST ON SERVER
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// LISTENING ON LOCALHOST
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// REACT STATIC BUILD FOLDER AND GET ROUTE
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});