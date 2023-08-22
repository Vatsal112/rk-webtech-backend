const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    clutchReviewImage: {
      type: String,
      required: true,
    },
    clutchReviewImageFileName: {
      type: String,
    },
    clutchReviewLink: {
      type: String,
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
