function create(req, res) {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Preencha todos os campos" });
  }

  res.status(201).send({
    message: "Usuário criado com sucesso!",
    user: {
      name,
      username,
      email,
      avatar,
      background,
    },
  });
}

module.exports = { create };
