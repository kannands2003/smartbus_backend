const Udetail = require('../models/udetail');
const User = require('../models/usermodel');

const getUserDetails = async (req, res) => {
    try {
        const { name } = req.body;  // Extract the user's name from the request

        if (!name) {
            return res.status(400).json({ message: "User name is required" });
        }

        // Find the user by name
        const user = await User.findOne({ name }).exec();

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find all Udetail records where `user` field matches the user's `_id`
        const userDetails = await Udetail.find({ user: user._id });

        if (!userDetails.length) {
            return res.status(404).json({ message: "No attendance records found for this user" });
        }

        res.json(userDetails);
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getUserDetails };
