const User = require("../models/User");
require("dotenv").config();

exports.selectRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!role) {
      throw new Error("Role not provided");
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

exports.getCurrentUserDetails = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      messgae: 'current user details fecthed successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.getUserDetails = async (req, res) => {
  try {
    const { id } = req.query;
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

exports.getRecycledWasteByaUser = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findById(id).populate('recycledWaste').select('recycledWaste');
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      message: "recycled waste by a user fecthed succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.getAddedWasteByaSupplier = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findById(id).populate('addedWaste').select('addedWaste');
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      message: "added waste by a supplier fecthed succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.getRequestedWasteByaReceiver = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findById(id).populate('requestedWaste').select('requestedWaste');
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({
      success: true,
      message: "requested waste by a receiver fecthed succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.getAllSuppliers = async (req, res) => {
  try {
    const users = await User.find({ role: "Supplier" });
    if (!users.length) {
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