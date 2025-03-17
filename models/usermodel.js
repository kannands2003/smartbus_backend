const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name (required)
    email: { type: String, unique: true, required: true }, // Unique email (required)
    password: { type: String, required: true }, // Plain-text password (for now)
    role: {
      type: String,
      enum: ["admin", "user1"], // Allowed roles
      default: "user1",
    },
    attendanceRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: "Udetail" }], // Links to Udetail records
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

module.exports = User;
