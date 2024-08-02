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
      user: req.userId,
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getAll(req, res) {
  try {

    const news = req.results

    res.send({
      nextUrl: req.nextUrl,
      previousUrl: req.previousUrl,
      limit: req.limit,
      offset: req.offset,
      totalPosts: req.totalPosts,

      results: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comments: newsItem.comments,
        name: newsItem.user.name,
        username: newsItem.user.username,
        userAvatar: newsItem.user.avatar,
        created_at: newsItem.created_at,
      })),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const newsController = { create, getAll };

export default newsController;
