const route = require("express").Router();
const userController = require("../controllers/userController"); //Trazendo o controller de usuários

route.post("/", userController.create);

module.exports = route;
