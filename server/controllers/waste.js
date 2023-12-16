const User = require("../models/User");
const Waste = require("../models/Waste");

exports.addWaste = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (user.role === 'Receiver') {
      throw new Error('you cannot add waste');
    }
    const { category, measuringUnit, amount, price, departure } = req.body;
    const waste = await Waste.create({
      user,
      category,
      measuringUnit,
      amount,
      price,
      departure,
      AddedWaste: true
    });
    await User.findByIdAndUpdate(id, { $push: { addedWaste: waste._id } });
    res.status(200).json({
      success: true,
      message: "waste details created successfully by Supplier",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.requestWaste = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    if (user.role === 'Supplier') {
      throw new Error('you cannot request waste');
    }
    const { category, measuringUnit, amount, price, departure } = req.body;
    const waste = await Waste.create({
      user,
      category,
      measuringUnit,
      amount,
      price,
      departure,
      requestedWaste: true
    });
    await User.findByIdAndUpdate(id, { $push: { requestedWaste: waste._id } });
    res.status(200).json({
      success: true,
      message: "waste details created successfully by Supplier",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.requestedWaste = async (req, res) => {
  try {
    const wastes = await Waste.find({ requestedWaste: true }).populate("user").exec();
    if (!wastes) {
      throw new Error("Requested waste not found");
    }
    res.status(200).json({
      success: true,
      message: "waste details found successfully",
      data: wastes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addedWaste = async (req, res) => {
  try {
    const wastes = await Waste.find({ AddedWaste: true }).populate("user").exec();
    if (!wastes) {
      throw new Error("Suppliers waste not found");
    }
    res.status(200).json({
      success: true,
      message: "waste details found successfully",
      data: wastes,
    });
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
    const waste = await Waste.findByIdAndUpdate(wasteId, { recycled: true });
    const { receiverId } = req.user;
    const supplierId = waste.user;
    await User.findByIdAndUpdate(receiverId, { $push: { recycledWaste: wasteId }, $pull: { requestedWaste: wasteId } });
    await User.findByIdAndUpdate(supplierId, { $push: { recycledWaste: wasteId }, $pull: { addedWaste: wasteId } });
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

exports.getCategoryWasteAdded = async (req, res) => {
  try {
    const { category } = req.query;
    const wastes = await Waste.find({ category, AddedWaste: true }).populate('user');
    if (!wastes) {
      throw new Error('no added waste found under that category');
    }
    res.status(200).json({
      success: true,
      message: 'waste details fecthed succsesfully',
      data: wastes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

exports.getCategoryWasteRequested = async (req, res) => {
  try {
    const { category } = req.query;
    const wastes = await Waste.find({ category, requestedWaste: true }).populate('user');
    if (!wastes) {
      throw new Error('no added waste found under that category');
    }
    res.status(200).json({
      success: true,
      message: 'waste details fecthed succsesfully',
      data: wastes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}