import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  text: { type: String, require: true },
  banner: { type: String, require: true },
  created_at: { type: Date, default: Date.now },
  // Relacionamentos
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  likes: {
    type: Array,
    require: true,
  },
  comments: {
    type: Array,
    require: true,
  },
});

const News = mongoose.model("News", NewsSchema);

export default News;
