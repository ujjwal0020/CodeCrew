const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Shikhar:%40Shekhuinsta_44@devtinder.lmvcf6x.mongodb.net/"
  );
};
module.exports = connectDB;
