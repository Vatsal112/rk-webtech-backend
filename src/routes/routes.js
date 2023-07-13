const express = require("express");
const { contactUsController,inquiryController, addPortfolioController, getAllPortfoliosController, getSinglePortfoliosController, updatePortfolioController } = require("../controllers/controller");
const router = new express.Router();

router.post("/contact-us", contactUsController);
router.post("/inquiry", inquiryController);
router.post("/add-portfolio", addPortfolioController);
router.get("/portfolios",getAllPortfoliosController);
router.get("/portfolio/:id",getSinglePortfoliosController);
router.put('/portfolio/:id',updatePortfolioController);

module.exports = router;
