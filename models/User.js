const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  emailAddress: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
