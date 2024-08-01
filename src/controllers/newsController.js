import newsService from "../services/newsService.js";

async function create(req, res) {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: "Submit all fields for create" });
      return;
    }

    await newsService.create({ title, text, banner, id: "objectidfake1" });

    res.send(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

function getAll(req, res) {
  try {
    const news = [];
    res.send(news);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const newsController = { create, getAll };

export default newsController;
