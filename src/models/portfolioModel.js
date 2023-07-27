const mongoose = require("mongoose");
const portfolioSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    cardImage: {
      type: String,
      required: true,
    },
    mainPortfolioImage: {
      type: String,
      required: true,
    },
    mobileAppImage:{
      type: String,
    },
    uiUxImage: {
      type:String,
    },
    websiteImage:{
      type:String,
    },
    projectDetails:{
        type:mongoose.SchemaTypes.Mixed,
        required: true,
    },
    technologiesUsed:{
        type:[{
            type:String,
        }],
        required: true,
    },
    toolsLibraryUsed:{
        type:[{
            type:String,
        }],
        required: true,
    },
    isActive:{
      type:Boolean,
      default:true,
    }
  },
  {
    timestamps: true,
  }
);

const portfolioModel = mongoose.model("Portfolio", portfolioSchema);
module.exports = portfolioModel;
