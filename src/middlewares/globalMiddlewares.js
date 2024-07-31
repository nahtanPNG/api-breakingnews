import mongoose from "mongoose";
import userService from "../services/userService.js";

function isIdValid(req, res, next) {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ message: "Invalid Id" });
    }

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  } // Passa para o que vem em seguida na rota
}

async function isUserValid(req, res, next) {
  try {
    const id = req.params.id;
    const user = await userService.getById(id);

    if (user === null) {
      return res.status(404).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export { isIdValid, isUserValid };
