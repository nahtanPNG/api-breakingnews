import express from "express";
import connectDB from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";
import newsRoute from "./src/routes/newsRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

// Utilizando rotas
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
