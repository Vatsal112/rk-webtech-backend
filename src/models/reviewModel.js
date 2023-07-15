const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    customerImage: {
      type: String,
      required: true,
    },
    customerDesignation: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    ratings: {
      type: String,
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

const reviewModel = mongoose.model("Reviews", reviewSchema);
module.exports = reviewModel;
