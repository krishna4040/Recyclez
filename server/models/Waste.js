const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
<<<<<<< HEAD
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        enum: ['Food', 'E-waste', 'plastic-waste']
    },
    measuringUnit: {
        type: String,
        enum: ['Kg', 'pcs']
    },
    amount: Number,
    price: Number,
    departue: Date,
    recycled: Boolean
=======
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: ["Food", "E-waste", "plastic-waste"],
  },
  measuringUnit: {
    type: String,
    enum: ["Kg", "pcs"],
  },
  amount: Number,
  price: Number,
  departue: Date,
>>>>>>> 33253e68c41a6881d5aa7203eeab41524836f9f7
});

module.exports = mongoose.model("Waste", wasteSchema);
