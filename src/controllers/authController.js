import bcrypt from "bcrypt";
import authService from "../services/authService.js";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await authService.findUser(email);

    if (!user) {
      return res.status(404).send({ message: "Invalid user or password" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({ message: "Invalid user or password" });
    }

    res.send("Login ok");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export { login };
