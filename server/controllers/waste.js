const User = require("../models/User");
const Waste = require("../models/Waste");

exports.createWasteDetails = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (user.role === "Receiver") {
      const { category, measuringUnit, amount } = req.body;
      await Waste.create({ user, category, measuringUnit, amount });
      res.status(200).json({
        success: true,
        message: "waste details created successfully by receiver",
      });
    }
    if (user.role === "Supplier") {
      const { category, measuringUnit, amount, price, departure } = req.body;
      await Waste.create({
        user,
        category,
        measuringUnit,
        amount,
        price,
        departure,
      });
      res.status(200).json({
        success: true,
        message: "waste details created successfully by Supplier",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.requestedWaste = async (req, res) => {
  try {
    const wastes = await Waste.find({}).populate("user").exec();
    const requestedWaste = [];
    wastes.forEach((waste) => {
      if (waste.user.role === "Receiver") {
        requestedWaste.push(waste);
      }
    });
    if (!requestedWaste) {
      throw new Error("Requested waste not found");
    }
    res.status(200).json({
      success: false,
      message: "waste details found successfully",
      data: requestedWaste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.suppliersWaste = async (req, res) => {
  try {
    const wastes = await Waste.find({}).populate("user").exec();
    const requestedWaste = [];
    wastes.forEach((waste) => {
      if (waste.user.role === "Supplier") {
        requestedWaste.push(waste);
      }
    });
    if (!requestedWaste) {
      throw new Error("Suppliers waste not found");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

exports.confirmRecycle = async (req, res) => {
    try {
      const { wasteId } = req.body;
      const { id } = req.user;
      const waste = await Waste.findByIdAndUpdate(wasteId, { recycled: true });
      await User.findByIdAndUpdate(id, { $push: { recycledWaste: wasteId } });
      res.status(200).json({
        success: true,
        message: 'waste recycled successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  exports.getRecycledWaste = async (req, res) => {
    try {
      const wastes = await Waste.find({ recycled: true });
      if (!wastes) {
        throw new Error('unable to fecth recycled waste');
      }
      res.status(200).json({
        success: true,
        message: 'recycled waste found successfully',
        data: wastes
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
  }
