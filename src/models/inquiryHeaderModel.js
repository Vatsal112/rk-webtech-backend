const mongoose = require("mongoose");
const inquiryHeaderModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const inquiryHeader = mongoose.model("InquiryHeader", inquiryHeaderModel);
module.exports = inquiryHeader;
