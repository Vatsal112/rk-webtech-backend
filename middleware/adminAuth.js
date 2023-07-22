const jwt = require("jsonwebtoken");
const User = require("../src/models/adminUserModel");
const config = require("../src/configs/config");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findOne({
      _id: decode._id,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    req.id = user._id;
    next();
  } catch (e) {
    res.status(401).send({ status:401,error: "Unauthorized" });
  }
};

module.exports = auth;