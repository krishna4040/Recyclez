const User = require("../models/User");
const { cdupload } = require("../utils/cloudinary");
const { sendMail } = require("../utils/nodemailer");
const { template } = require("../utils/template");
require("dotenv").config();

exports.selectRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!role) {
      throw new Error("Roe not provided");
    }
    const { id } = req.user;
    await User.findByIdAndUpdate(id, { role });
    res.status(200).json({
      success: true,
      message: "Role was updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      message: "user details fecthed successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const users = await User.find({ role: "Supplier" });
    if (!users) {
      throw new Error("No supplier found");
    }
    res.status(200).json({
      success: true,
      message: "All suppliers fecthed",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllReceivers = async (req, res) => {
  try {
    const users = await User.find({ role: "Receiver" });
    if (!users) {
      throw new Error("No Receiver found");
    }
    res.status(200).json({
      success: true,
      message: "All Receivers fecthed",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// exports.contactViaEmail = async (req, res) => {
//     try {
//         const { supplierId } = req.body;
//         const supplier = await User.findById(supplierId);
//         const mail = await sendMail(supplier.email,"lorem ipsum",'<h1>Hello</h1>');
//     } catch (error) {

//     }
// }
