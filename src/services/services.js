const ContactUs = require("../models/contactModel");
const Inquiry = require("../models/inquiryModel");
const Portfolio = require("../models/portfolioModel");
const Blogs = require("../models/blogModel");
const Reviews = require("../models/reviewModel");
const User = require("../models/adminUserModel");
const InquiryHeaderModel = require('../models/inquiryHeaderModel')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../configs/config.js");
const inquiryHeader = require("../models/inquiryHeaderModel");

const contactUsService = async (params) => {
  try {
    const data = new ContactUs(params);
    const res = await data.save();
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const inquiryService = async (params) => {
  try {
    const data = new Inquiry(params);
    const res = await data.save();
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addPortfolioService = async (params) => {
  try {
    if (
      [null, undefined, ""].includes(params.type) ||
      [null, undefined, ""].includes(params.title) ||
      [null, undefined, ""].includes(params.bannerImage) ||
      [null, undefined, ""].includes(params.cardImage) ||
      [null, undefined, ""].includes(params.projectDetails) ||
      [null, undefined, ""].includes(params.technologiesUsed) ||
      [null, undefined, ""].includes(params.toolsLibraryUsed)
    ) {
      return {
        status: 400,
        message: "Please Provide valid input or enter required data",
      };
    }

    const isPortfolioExist = await Portfolio.findOne({ title: params.title });
    if (isPortfolioExist) {
      return {
        status: 400,
        message: "Portfolio with the same title already exist already exists",
      };
    }

    const data = new Portfolio(params);
    const res = await data.save();
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
const getAllPortfoliosService = async () => {
  try {
    const data = await Portfolio.find({ isActive: true });
    if (!data) {
      return {
        status: 400,
        message: "No data found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getSinglePortfoliosService = async (id) => {
  try {
    const data = await Portfolio.findById({ _id: id });
    if (!data) {
      return {
        status: 404,
        message: "Portfolio not found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updatePortfolioService = async (id, params) => {
  try {
    const isPortfolioExist = await Portfolio.findOne({ title: params.title });
    if (isPortfolioExist) {
      return {
        status: 400,
        message: "Portfolio with the same title already exist already exists",
      };
    }
    const data = await Portfolio.findOneAndUpdate({ _id: id }, params, {
      new: true,
    });
    if (!data) {
      return {
        status: 400,
        message:
          "Portfolio not found or something went wrong while updating the review",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const deletePortfolioService = async (id) => {
  try {
    const param = { _id: id.trim() };
    const isExist = await Portfolio.findById(param._id);
    if (!isExist) {
      return {
        status: 404,
        message: "Portfolio not found",
      };
    }
    const data = await Portfolio.deleteOne(param);
    if (data.deletedCount === 1) {
      return {
        status: 200,
        message: "Portfolio deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "No document found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addBlogService = async (params) => {
  try {
    if (
      [null, undefined, ""].includes(params.title) ||
      [null, undefined, ""].includes(params.mainImage) ||
      [null, undefined, ""].includes(params.cardImage) ||
      [null, undefined, ""].includes(params.content)
    ) {
      return {
        status: 400,
        message: "Please Provide valid input or enter required data",
      };
    }
    const isBlogExist = await Blogs.findOne({ title: params.title });
    if (isBlogExist) {
      return {
        status: 400,
        message: "Blog with the same title already exist already exists",
      };
    }
    const data = new Blogs(params);
    const response = await data.save();
    return {
      status: 200,
      data: response,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getAllBlogsService = async () => {
  try {
    const allBlogs = await Blogs.find({ isActive: true });
    if (allBlogs.length === 0) {
      return {
        status: 404,
        message: "No blogs found",
      };
    }
    return {
      status: 200,
      data: allBlogs,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getSingleBlogService = async (id) => {
  try {
    const param = { _id: id };
    const data = await Blogs.findById(param);
    if (!data) {
      return {
        status: 404,
        message: "Blog not found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updateBlogService = async (id, params) => {
  try {
    const isBlogExist = await Blogs.findOne({ title: params.title });
    if (isBlogExist) {
      return {
        status: 400,
        message: "Blog with the same title already exist already exists",
      };
    }
    const data = await Blogs.findOneAndUpdate({ _id: id }, params, {
      new: true,
    });

    if (!data) {
      return {
        status: 400,
        message:
          "Blog not found or something went wrong while updating the review",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const deleteBlogService = async (id) => {
  try {
    const param = { _id: id.trim() };
    const isExist = await Blogs.findById(param._id);
    if (!isExist) {
      return {
        status: 404,
        message: "Blog not found",
      };
    }
    const data = await Blogs.deleteOne(param);
    if (data.deletedCount === 1) {
      return {
        status: 200,
        message: "Blog deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "No document found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addReviewService = async (params) => {
  try {
    if (
      [null, undefined, ""].includes(params.clutchReviewImage) ||
      [null, undefined, ""].includes(params.clutchReviewLink)
    ) {
      return {
        status: 400,
        message: "Please Provide valid input or enter required data",
      };
    }
    const data = await new Reviews(params).save();

    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getAllReviewsService = async () => {
  try {
    const allReviews = await Reviews.find({ isActive: true });
    if (allReviews.length === 0) {
      return {
        status: 404,
        message: "No Reviews found",
      };
    }
    return {
      status: 200,
      data: allReviews,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getSingleReviewService = async (id) => {
  try {
    const param = { _id: id };
    const data = await Reviews.findById(param);
    if (!data) {
      return {
        status: 404,
        message: "Review not found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updateReviewService = async (id, params) => {
  try {
    const res = await Reviews.findByIdAndUpdate({ _id: id }, params, {
      new: true,
    });
    if (!res) {
      return {
        status: 400,
        message:
          "Review not found or something went wrong while updating the review",
      };
    }
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const deleteReviewService = async (id) => {
  try {
    const param = { _id: id.trim() };
    const isExist = await Reviews.findById(param._id);
    if (!isExist) {
      return {
        status: 404,
        message: "Review not found",
      };
    }
    const data = await Reviews.deleteOne(param);
    if (data.deletedCount === 1) {
      return {
        status: 200,
        message: "Review deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "No document found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addUserService = async (params) => {
  try {
    if (
      [null, undefined, ""].includes(params.username) ||
      [null, undefined, ""].includes(params.email) ||
      [null, undefined, ""].includes(params.password)
    ) {
      return {
        status: 400,
        message: "Please Provide valid input or enter required data",
      };
    }
    const isUserExist = await User.findOne({ email: params.email });
    if (isUserExist) {
      return {
        status: 404,
        message: "User already exists! please enter a new email",
      };
    }
    params.password = await bcrypt.hash(params.password, 8);
    const user = await new User(params).save();
    if (user) {
      const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
        expiresIn: "24h",
      });
      return {
        status: 200,
        data: token,
      };
    } else {
      throw new Error("Error while Registering User");
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const userLoginService = async (params) => {
  try {
    const user = await User.findOne({ email: params.email });
    if (!user) {
      return {
        status: 400,
        message: "User does not exist",
      };
    }
    const isMatch = await bcrypt.compare(params.password, user.password);
    if (!isMatch) {
      return {
        status: 400,
        message: "Password is incorrect",
      };
    }
    const token = jwt.sign({ _id: user?._id }, config.JWT_SECRET, {
      expiresIn: "24h",
    });
    return {
      status: 200,
      email:user.email,
      token: token,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getAllContactUsDataService = async () => {
  try {
    const data = await ContactUs.find();
    if (data.length === 0) {
      return {
        status: 404,
        message: "No Data Found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getAllInquiriesService = async () => {
  try {
    const data = await Inquiry.find();
    if (data.length === 0) {
      return {
        status: 404,
        message: "No Data Found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const userForgetPasswordService = async (params) => {
  try {
    const user = await User.findOne({ email: params.email });
    if (!user) {
      return {
        status: 400,
        message: "User does not exist",
      };
    }
    params.password = await bcrypt.hash(params.password, 8);
    const updatePassword = await User.findOneAndUpdate(
      { email: params.email },
      { password: params.password },
      {
        new: true,
      }
    );
    if (updatePassword) {
      return {
        status: 200,
        message: "Password updated successfully!!",
      };
    } else {
      return {
        status: 400,
        message: "Something went wrong while updating password",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const addInquiryTitleService =async(params)=>{
  try {
    const isDataExist = await inquiryHeader.find({});
    if(isDataExist){
      await inquiryHeader.deleteMany({});
    }
    const data = new inquiryHeader(params);
    const response = await data.save();
    return {
      status:200,
      data:response
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

const getInquiryHeaderService=async()=>{
  try {
    const data = await inquiryHeader.find({});
    if(!data){
      return{
        status:404,
        message:"Data not found!!",
      }
    }else{
      return {
        status:200,
        data:data
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

module.exports = {
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
  getInquiryHeaderService
};
