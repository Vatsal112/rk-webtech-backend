const ContactUs = require("../models/contactModel");
const Inquiry = require("../models/inquiryModel")
const Portfolio = require('../models/portfolioModel')

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

const inquiryService= async(params)=>{
  try {
    const data = new Inquiry(params);
    const res = await data.save();
    return{
      status:200,
      data:res
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

const addPortfolioService = async(params)=>{
  try {
    if([null,undefined,""].includes(params.type) || [null,undefined,""].includes(params.title) || [null,undefined,""].includes(params.type) || [null,undefined,""].includes(params.bannerImage) || [null,undefined,""].includes(params.cardImage) || [null,undefined,""].includes(params.mainPortfolioImage) || [null,undefined,""].includes(params.projectDetails) || [null,undefined,""].includes(params.technologiesUsed) || [null,undefined,""].includes(params.toolsLibraryUsed)){
      return {
        status: 400,
        message: "Please Provide valid input or enter required data",
      };
    }

    const data = new Portfolio(params);
    const res = await data.save();
    return{
      status:200,
      data:res
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}
const getAllPortfoliosService=async ()=>{
  try {
    const data = await Portfolio.find({isActive:true});
    if(!data){
      return {
        status:400,
        message:"No data found"
      }
    }
    return {
      status:200,
      data:data
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

const getSinglePortfoliosService=async (id)=>{
  try {
    const data = await Portfolio.findById(id);
    if(!data){
      return {
        status:400,
        message:"No data found"
      }
    }
    return {
      status:200,
      data:data
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

const updatePortfolioService = async (id,params)=>{
  try {
    const data = await Portfolio.findOneAndUpdate({_id:id},params,{new:true });
    if(!data){
      return {
        status:400,
        message:"Something went wrong!"
      }
    }
    return {
      status:200,
      data:data
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
  updatePortfolioService
};
