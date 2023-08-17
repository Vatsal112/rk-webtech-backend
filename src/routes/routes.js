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
  addUserController,
  userLoginController,
  getAllContactUsDataController,
  getAllInquiriesController,
} = require("../controllers/controller");
const auth = require("../../middleware/adminAuth");
const router = new express.Router();

//Contact Us and Inquiry routes
router.post("/contact-us", contactUsController);
router.post("/inquiry", inquiryController);
router.get("/contact-us",auth,getAllContactUsDataController)
router.get("/inquiries",auth,getAllInquiriesController)

//Portfolio routes
router.post("/add-portfolio",auth, addPortfolioController);
router.get("/portfolios", getAllPortfoliosController);
router.get("/portfolio/:id",auth, getSinglePortfoliosController);
router.put("/portfolio/:id",auth, updatePortfolioController);
router.delete("/portfolio/:id",auth, deletePortfolioController);

//blog routes
router.post("/add-blog",auth, addBlogController);
router.get("/blogs", getAllBlogsController);
router.get("/blog/:id",auth, getSingleBlogController);
router.put("/blog/:id",auth, updateBlogController);
router.delete("/blog/:id",auth, deleteBlogController);

//Review Routes
router.post("/add-review",auth, addReviewController);
router.get("/reviews", getAllReviewsController);
router.get("/review/:id",auth, getSingleReviewController);
router.put("/review/:id",auth, updateReviewController);
router.delete("/review/:id",auth, deleteReviewController);

//Admin User Routes
router.post("/user/register", addUserController);
router.post("/user/login",userLoginController);

module.exports = router;
