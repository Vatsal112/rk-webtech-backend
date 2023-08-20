const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    cardImage: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
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

const blogModel = mongoose.model("Blogs", blogSchema);
module.exports = blogModel;
