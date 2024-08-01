import News from "../models/News.js";

const create = (body) => News.create(body);
const getAll = () => News.find();

const newsService = { create, getAll };

export default newsService;