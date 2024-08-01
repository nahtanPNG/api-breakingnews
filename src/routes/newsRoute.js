import express from "express";
import newsController from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const newsRoute = express.Router();

newsRoute.post("/", authMiddleware, newsController.create);
newsRoute.get("/", newsController.getAll);

export default newsRoute;
