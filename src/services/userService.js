const User = require("../models/User");

// Criando um novo item dentro do schema
const create = (body) => User.create(body);

module.exports = { create };
