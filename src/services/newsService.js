import News from "../models/News.js";

const create = (body) => News.create(body);
const getAll = (limit, offset) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user"); //Pegando o mais recente, quanto deve pular e o limite

const countNews = () => News.countDocuments();

const newsService = { create, getAll, countNews };

export default newsService;
