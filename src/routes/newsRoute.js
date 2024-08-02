import express from "express";
import newsController from "../controllers/newsController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import paginationMiddleware from "../middlewares/paginationMiddleware.js";

const newsRoute = express.Router();

newsRoute.post("/", authMiddleware, newsController.create);
newsRoute.get("/", paginationMiddleware , newsController.getAll);

export default newsRoute;
