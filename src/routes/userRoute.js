const route = require("express").Router();
const userController = require("../controllers/userController"); //Trazendo o controller de usuários

const { isIdValid, isUserValid } = require("../middlewares/globalMiddlewares");

route.post("/", userController.create);
route.get("/", userController.getAll);
route.get("/:id", isIdValid, isUserValid, userController.getById);
route.patch("/:id", isIdValid, isUserValid, userController.update);

module.exports = route;
