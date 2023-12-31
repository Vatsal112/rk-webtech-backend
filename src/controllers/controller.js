const {
  contactUsService,
  inquiryService,
  addPortfolioService,
  getAllPortfoliosService,
  getSinglePortfoliosService,
  updatePortfolioService,
  deletePortfolioService,
  addBlogService,
  getAllBlogsService,
  getSingleBlogService,
  updateBlogService,
  deleteBlogService,
  addReviewService,
  getAllReviewsService,
  getSingleReviewService,
  updateReviewService,
  deleteReviewService,
  addUserService,
  userLoginService,
  getAllContactUsDataService,
  getAllInquiriesService,
  userForgetPasswordService,
  addInquiryTitleService,
  getInquiryHeaderService,
} = require("../services/services");

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
};

const getAllPortfoliosController = async (req, res, next) => {
  const response = await getAllPortfoliosService();
  return res.status(response?.status).send(response);
};

const getSinglePortfoliosController = async (req, res, next) => {
  const response = await getSinglePortfoliosService(req.params.id);
  return res.status(response?.status).send(response);
};

const updatePortfolioController = async (req, res, next) => {
  const response = await updatePortfolioService(req.params.id, req.body);
  return res.status(response?.status).send(response);
};

const deletePortfolioController = async (req, res, next) => {
  const response = await deletePortfolioService(req.params.id);
  return res.status(response?.status).send(response);
};

const addBlogController = async (req, res, next) => {
  const response = await addBlogService(req.body);
  return res.status(response?.status).send(response);
};

const getAllBlogsController = async (req, res, next) => {
  const response = await getAllBlogsService();
  return res.status(response?.status).send(response);
};

const getSingleBlogController = async (req, res, next) => {
  const response = await getSingleBlogService(req.params.id);
  return res.status(response?.status).send(response);
};

const updateBlogController = async (req, res, next) => {
  const response = await updateBlogService(req.params.id, req.body);
  return res.status(response?.status).send(response);
};

const deleteBlogController = async (req, res, next) => {
  const response = await deleteBlogService(req.params.id);
  return res.status(response?.status).send(response);
};

const addReviewController = async (req, res, next) => {
  const response = await addReviewService(req.body);
  return res.status(response?.status).send(response);
};

const getAllReviewsController = async (req, res, next) => {
  const response = await getAllReviewsService(req.body);
  return res.status(response?.status).send(response);
};
const getSingleReviewController = async (req, res, next) => {
  const response = await getSingleReviewService(req.params.id);
  return res.status(response?.status).send(response);
};

const updateReviewController = async (req, res, next) => {
  const response = await updateReviewService(req.params.id, req.body);
  return res.status(response?.status).send(response);
};

const deleteReviewController = async (req, res, next) => {
  const response = await deleteReviewService(req.params.id);
  return res.status(response?.status).send(response);
};

const addUserController = async (req, res, next) => {
  const response = await addUserService(req.body);
  return res.status(response?.status).send(response);
}

const userLoginController = async (req, res, next) => {
  const response = await userLoginService(req.body);
  return res.status(response?.status).send(response);
}

const getAllContactUsDataController = async (req, res, next) => {
  const response = await getAllContactUsDataService();
  return res.status(response?.status).send(response);
}

const getAllInquiriesController = async (req, res)=>{
  const response = await getAllInquiriesService();
  return res.status(response?.status).send(response);
}

const userForgetPasswordController = async(req,res)=>{
  const response = await userForgetPasswordService(req.body);
  return res.status(response?.status).send(response);
}

const addInquiryTitleController= async(req,res)=>{
  const response = await addInquiryTitleService(req.body);
  return res.status(response?.status).send(response);
}

const getInquiryHeaderController = async(req,res)=>{
  const response = await getInquiryHeaderService();
  return res.status(response?.status).send(response);
}

module.exports = {
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
  userForgetPasswordController,
  addInquiryTitleController,
  getInquiryHeaderController
};
