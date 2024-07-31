import User from "../models/User.js";

const findUser = (email) => User.findOne({ email: email }).select("+password"); //Buscando por um filtro

const authService = { findUser };

export default authService;
