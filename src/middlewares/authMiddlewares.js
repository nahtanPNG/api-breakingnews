import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../services/userService.js";

dotenv.config();

export async function authMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    // Separando o token do Bearer
    const parts = authorization.split(" "); // Bearer <token>

    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    // Verificando o token
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Invalid token" });
      } else {
        const user = await userService.getById(decoded.id);

        if (!user || !user.id) {
          return res.status(404).send({ message: "User not found" });
        }

        req.userId = user._id;

        next();
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
