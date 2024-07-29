const mongoose = require("mongoose");
const userService = require("../services/userService");

function isIdValid(req, res, next) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Invalid Id" });
  }

  next(); // Passa para o que vem em seguida na rota
}

async function isUserValid(req, res, next) {
  const id = req.params.id;
  const user = await userService.getById(id);

  if (user === null) {
    return res.status(404).send({ message: "User not found" });
  }

  next();
}

module.exports = { isIdValid, isUserValid };
