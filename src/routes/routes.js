const express = require("express");
const {
  contactUsController,
  inquiryController,
  addPortfolioController,
  getAllPortfoliosController,
  getSinglePortfoliosController,
  updatePortfolioController,
  deletePortfolioController,
  addBlogController,
  getAllBlogsController,
  getSingleBlogController,
  updateBlogController,
  deleteBlogController,
  addReviewController,
  getAllReviewsController,
  getSingleReviewController,
  updateReviewController,
  deleteReviewController,
} = require("../controllers/controller");
const router = new express.Router();

router.post("/contact-us", contactUsController);
router.post("/inquiry", inquiryController);

//Portfolio routes
router.post("/add-portfolio", addPortfolioController);
router.get("/portfolios", getAllPortfoliosController);
router.get("/portfolio/:id", getSinglePortfoliosController);
router.put("/portfolio/:id", updatePortfolioController);
router.delete("/portfolio/:id", deletePortfolioController);

//blog routes
router.post("/add-blog", addBlogController);
router.get("/blogs", getAllBlogsController);
router.get("/blog/:id", getSingleBlogController);
router.put("/blog/:id", updateBlogController);
router.delete("/blog/:id", deleteBlogController);

//Review Routes
router.post("/add-review", addReviewController);
router.get("/reviews", getAllReviewsController);
router.get("/review/:id", getSingleReviewController);
router.put("/review/:id", updateReviewController);
router.delete("/review/:id", deleteReviewController);

module.exports = router;
