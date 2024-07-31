import express from "express";
import userRoute from "./src/routes/userRoute.js";
import connectDB from "./src/database/db.js";

const app = express();
const port = 3000;

connectDB();
app.use(express.json());
// Utilizando rotas
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
