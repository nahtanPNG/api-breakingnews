const userService = require("../services/userService");

async function create(req, res) {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for create" });
    return;
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  res.status(201).send({
    message: "User created!",
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

async function getAll(req, res) {
  const users = await userService.getAll();

  if (users.lenght === 0) {
    return res.status(400).send({ message: "There are no registered users" });
  }

  res.send({ users });
}

function getById(req, res) {
  const user = req.user;
  res.send({ user });
}

async function update(req, res) {
  const { id, user } = req;
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one field for update" });
    return;
  }

  await userService.update(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({ message: "User successfully updated!" });
}

module.exports = { create, getAll, getById, update };
