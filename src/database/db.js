import mongoose from "mongoose";

function connectDB() {
  console.log("Wait for database connection...");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

export default connectDB;
