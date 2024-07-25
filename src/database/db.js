const mongoose = require("mongoose");

function connectDB() {
  console.log("Wait for database connection...");

  mongoose
    .connect(
      "mongodb+srv://root:abc123**@cluster0.bcwnmoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

module.exports = connectDB;
