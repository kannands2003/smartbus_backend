const mongoose = require('mongoose');

const udetailSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
    name: { type: String, required: true }, // User's name (required)
    Date: { type: Date, required: true }, // Date of the record
    Time: { type: String, required: true }, // Time (can be stored as string like "14:30" or "2:30 PM")
    Status: { type: String, enum: ["entry", "exit"], required: false }, // Entry or Exit type
    Stop: { type: String, required: false }, // Location name or coordinates
    Image: {type:String,required:false}
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Udetail = mongoose.model("Udetail", udetailSchema);

module.exports = Udetail;