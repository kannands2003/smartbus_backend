const express = require("express");
const { login, verifyLogin, signup } = require("../controllers/authorizcontroller");
const User = require("../models/usermodel"); // Import User model

const router = express.Router();

router.post("/signup", signup); // Signup route
router.post("/login", login);   // Login route
console.log("Auth Routes Loaded");

// Fetch all users (Admin only)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "name email role"); // Fetch only name, email, and role
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/verify", verifyLogin);

module.exports = router;
