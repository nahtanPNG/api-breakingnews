import express from "express";
import newsController from "../controllers/newsController.js";

const newsRoute = express.Router();

newsRoute.post("/", newsController.create);
newsRoute.get("/", newsController.getAll);

export default newsRoute;
