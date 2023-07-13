const mongoose = require("mongoose");
const config = require("../configs/config.js");

const connect = mongoose.connect(config.MONGODB_URL, {
  autoIndex: true,
});

module.exports = connect;
