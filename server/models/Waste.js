const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
    user: {
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
    requestedWaste: {
        type: Boolean,
        default: false
    },
    AddedWaste: {
        type: Boolean,
        default: false
    },
    price: Number,
    departue: Date,
    recycled: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Waste", wasteSchema);
