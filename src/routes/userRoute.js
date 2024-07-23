const route = require("express").Router();
const userController = require("../controllers/userController"); //Trazendo o controller de usuários

route.get("/", userController.dev);

module.exports = route;
