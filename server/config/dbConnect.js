const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("db connected succesfully"))
    .catch((err) => console.log(err));
};