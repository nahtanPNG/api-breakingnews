import express from "express";
import userRoute from "./src/routes/userRoute.js";
import connectDB from "./src/database/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());
// Utilizando rotas
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
