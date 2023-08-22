const mongoose = require("mongoose");
const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    projectDetails: {
      type: String,
      required: true,
    },
    document: {
      type: String,
    },
    documentName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const inquiryModel = mongoose.model("Inquiry", inquirySchema);
module.exports = inquiryModel;
