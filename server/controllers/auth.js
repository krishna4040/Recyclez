const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/User");
const { cdupload } = require("../utils/cloudinary");

exports.signup = async (req, res) => {
  try {
    const { email, password, userName, contact } = req.body;
    if (!email || !password || !contact || !userName) {
      throw new Error("All fields are required");
    }
    const check = await User.findOne({ email });
    if (check) {
      throw new Error("user already signed up");
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hash,
      userName,
      contact,
    });
    if (!user) {
      throw new Error("smth went wrong while signing up");
    }
    res.status(200).json({
      success: true,
      message: "user signed up successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All feilds are requiered");
    }
    const check = await User.findOne({ email });
    if (!check) {
      throw new Error("User not signed up");
    }
    const compare = await bcrypt.compare(password, check.password);
    if (!compare) {
      throw new Error("Password do not macth");
    }
    const payload = {
      id: check._id,
      email: check.email,
      password: check.password,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "user logged in successfully",
      data: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
