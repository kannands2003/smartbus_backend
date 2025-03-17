const User = require("../models/usermodel");

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email }).exec();
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user (No password hashing)
        const newUser = new User({
            name,
            email,
            password, // Storing plain-text (not recommended for production)
            role: role || "user1"
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup Successful",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        const userExist = await User.findOne({ name }).exec();
        if (!userExist) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        if (password === userExist.password) {
            return res.json({
                message: "Login Successful",
                user: {
                    id: userExist._id,
                    name: userExist.name,
                    email: userExist.email,
                    role: userExist.role
                }
            });
        } else {
            return res.status(401).json({ message: "Unauthorized Access" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const verifyLogin = async (req, res) => { 
    res.json(req.user);
};

module.exports = {
    signup,
    login,
    verifyLogin
};
