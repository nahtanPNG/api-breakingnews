import express from "express";
import userController from "../controllers/userController.js"; //Trazendo o controller de usuários
import { isIdValid, isUserValid } from "../middlewares/globalMiddlewares.js";

const userRoute = express.Router();

userRoute.post("/", userController.create);
userRoute.get("/", userController.getAll);
userRoute.get("/:id", isIdValid, isUserValid, userController.getById);
userRoute.patch("/:id", isIdValid, isUserValid, userController.update);

export default userRoute;
