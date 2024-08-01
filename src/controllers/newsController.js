import newsService from "../services/newsService.js";
import { ObjectId } from "mongoose";

async function create(req, res) {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for create" });
      return;
    }

    await newsService.create({
      title,
      text,
      banner,
      user: { _id: "66aa53857e54b9d64ff526bc" },
    });

    res.send(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const news = await newsService.getAll();

    if (news.lenght === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    }

    res.send(news);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const newsController = { create, getAll };

export default newsController;
