import jwt from "jsonwebtoken";
import User from "../models/User.js";

const findUser = (email) => User.findOne({ email: email }).select("+password"); //Buscando por um filtro

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

const authService = { findUser, generateToken };

export default authService;
