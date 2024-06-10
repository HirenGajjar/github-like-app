const mongoose = require("mongoose");

const DBConnection = () => {
  try {
    const connectDB = mongoose.connect(
      "mongodb://127.0.0.1:27017/git-like-app"
    );
    console.log("DB Connected");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { DBConnection };
