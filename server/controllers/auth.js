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

    // Email-verification
    // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    // if (!response.length) {
    //     throw new Error('OTP not found');
    // }
    // if (otp != response[0].otp) {
    //     throw new Error('Invalid OTP');
    // }
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

// exports.sendotp = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const checkUserPresent = await User.findOne({ email });
//         if (checkUserPresent) {
//             throw new Error('USer already present');
//         }

//         let otp = otpGenerator.generate(6, {
//             upperCaseAlphabets: false,
//             lowerCaseAlphabets: false,
//             specialChars: false,
//         });
//         const result = await OTP.findOne({ otp: otp });
//         while (result) { // making otp unique
//             otp = otpGenerator.generate(6, { upperCaseAlphabets: false });
//         }
//         await OTP.create({ email, otp });
//         res.status(200).json({
//             success: true,
//             message: "OTP Sent Successfully",
//         });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message });
//     }
// };

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
