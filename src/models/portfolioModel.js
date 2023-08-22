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
    bannerImageFileName: {
      type: String,
    },
    cardImage: {
      type: String,
      required: true,
    },
    cardImageFileName: {
      type: String,
    },
    mobileAppImage: {
      type: String,
    },
    cardImageFileName: {
      type: String,
    },
    mobileAppImageMobile: {
      type: String,
    },
    mobileAppImageMobileFileName: {
      type: String,
    },
    uiUxImage: {
      type: String,
    },
    uiUxImageFileName:  {
      type: String,
    },
    uiUxImageMobile: {
      type: String,
    },
    uiUxImageMobileFileName: {
      type: String,
    },
    websiteImage: {
      type: String,
    },
    websiteImageFileName: {
      type: String,
    },
    websiteImageMobile: {
      type: String,
    },
    websiteImageMobileFileName: {
      type: String,
    },
    projectDetails: {
      type: mongoose.SchemaTypes.Mixed,
      required: true,
    },
    technologiesUsed: {
      type: [
        {
          type: String,
        },
      ],
      required: true,
    },
    toolsLibraryUsed: {
      type: [
        {
          type: String,
        },
      ],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const portfolioModel = mongoose.model("Portfolio", portfolioSchema);
module.exports = portfolioModel;
