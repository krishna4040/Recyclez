const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Waste", wasteSchema);
