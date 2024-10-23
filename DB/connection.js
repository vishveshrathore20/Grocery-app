const mongoose = require("mongoose");

const connectDB = async (mongourl) => {
  try {
    mongoose.connect(mongourl);
    console.log("Database Connected...".bgMagenta.yellow);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e.message);
  }
};

module.exports = connectDB;
