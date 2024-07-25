const userService = require("../services/userService");

async function create(req, res) {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Preencha todos os campos" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  res.status(201).send({
    message: "Usuário criado com sucesso!",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
}

module.exports = { create };
