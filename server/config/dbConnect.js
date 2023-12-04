const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
  mongoose.connect(process.env.DB || "mongodb://127.0.0.1:27017/innovation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("db connected succesfully"))
    .catch((err) => console.log(err));
};