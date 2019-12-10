const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI"); // config package allows us to define global default variables in a default.json file

//connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
