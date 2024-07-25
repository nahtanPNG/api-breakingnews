const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  background: { type: String },
});

// Definindo o scheema e sua variável
const User = mongoose.model("User", UserSchema);

module.exports = User;
