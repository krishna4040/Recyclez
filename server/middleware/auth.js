const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new Error("token not found");
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      throw new Error("invalid token");
    }
    req.user = decode;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.isSupplier = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("user not found");
    }
    if (user.role === "Receiver") {
      throw new Error("Receiver");
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

exports.isReceiver = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("user not found");
    }
    if (user.role === "Supplier") {
      throw new Error("Supplier");
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}