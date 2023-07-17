const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../configs/config");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findOne({
      _id: decode._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    req.id = user._id;
    next();
  } catch (e) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = auth;