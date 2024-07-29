const User = require("../models/User");

// Criando um novo item dentro do schema
const create = (body) => User.create(body);
const getAll = () => User.find();
const getById = (id) => User.findById(id);
const update = (id, name, username, email, password, avatar, background) =>
  User.findOneAndUpdate(
    { _id: id }, // Aqui passamos o ID do item que queremos alterar
    { name, username, email, password, avatar, background } // Aqui passamos o que queremos alterar
  );

module.exports = { create, getAll, getById, update };
