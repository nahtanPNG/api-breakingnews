import newsService from "../services/newsService.js";

export default async function paginationMiddleware(req, res, next) {
  let { limit, offset } = req.query;

  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 5;
  }

  if (!offset) {
    offset = 0;
  }

  const news = await newsService.getAll(limit, offset);
  const totalPosts = await newsService.countNews();
  const currentUrl = req.baseUrl;

  const nextPage = offset + limit;
  const nextUrl =
    nextPage < totalPosts ? `${currentUrl}?limit=${limit}&offset=${nextPage}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  if (news.lenght === 0) {
    return res.status(400).send({ message: "There are no registered news" });
  }

  req.nextUrl = nextUrl;
  req.previousUrl = previousUrl;
  req.limit = limit;
  req.offset = offset;
  req.totalPosts = totalPosts;

  req.results = news;

  next();
}
