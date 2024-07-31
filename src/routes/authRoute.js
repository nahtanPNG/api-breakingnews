import { Router } from "express";
import { login } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/", login);

export default authRoute;
