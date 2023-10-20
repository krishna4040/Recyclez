const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    email: String,
    password: String,
    userName: String,
    pfp: String,
    contact: [Number],
    role: {
        type: String,
        enum: ['Supplier', 'Receiver']
    },
    location: String,
    waste: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Waste'
    },
    recycledWaste: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Waste'
    }]
=======
  email: String,
  password: String,
  userName: String,
  pfp: String,
  contact: [Number],
  role: {
    type: String,
    enum: ["Supplier", "Receiver"],
  },
  location: String,
  waste: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Waste",
  },
>>>>>>> 33253e68c41a6881d5aa7203eeab41524836f9f7
});

module.exports = mongoose.model("User", userSchema);
