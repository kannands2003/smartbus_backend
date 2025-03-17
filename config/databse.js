const mongoose = require("mongoose");

 async function connectDB() {
  try {
    await mongoose.connect(`mongodb+srv://soorajksss136:zlC1hZMZ1ZwSGM63@cluster0.z9u6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message || "Error connecting to MongoDB");
    process.exit(1);
  }
}

module.exports = connectDB;