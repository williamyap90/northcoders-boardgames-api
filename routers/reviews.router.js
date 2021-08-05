const reviewsRouter = require("express").Router();
const {
  getReviewById,
  updateReviewById,
  getReviews,
  getReviewCommentsById,
} = require("../controllers/reviews.controller");

reviewsRouter.get("/", getReviews);
reviewsRouter.route("/:review_id").get(getReviewById).patch(updateReviewById);
reviewsRouter.route("/:review_id/comments").get(getReviewCommentsById);

module.exports = reviewsRouter;
