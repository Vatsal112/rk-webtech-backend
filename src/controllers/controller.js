const { contactUsService, inquiryService, addPortfolioService, getAllPortfoliosService, getSinglePortfoliosService, updatePortfolioService } = require("../services/services");

const contactUsController = async (req, res, next) => {
  const response = await contactUsService(req.body);
  return res.status(response?.status).send(response);
};

const inquiryController = async (req, res, next) => {
  const response = await inquiryService(req.body);
  return res.status(response?.status).send(response);
};

const addPortfolioController = async (req, res, next) => {
  const response = await addPortfolioService(req.body);
  return res.status(response?.status).send(response);
}

const getAllPortfoliosController = async (req, res, next) => {
  const response = await getAllPortfoliosService();
  return res.status(response?.status).send(response);
}

const getSinglePortfoliosController= async (req, res,next) => {
  const response = await getSinglePortfoliosService(req.params.id);
  return res.status(response?.status).send(response);
}

const updatePortfolioController = async (req, res, next) => {
  const response = await updatePortfolioService(req.params.id,req.body);
  return res.status(response?.status).send(response);
}

module.exports = {
  contactUsController,
  inquiryController,
  addPortfolioController,
  getAllPortfoliosController,
  getSinglePortfoliosController,
  updatePortfolioController
};
