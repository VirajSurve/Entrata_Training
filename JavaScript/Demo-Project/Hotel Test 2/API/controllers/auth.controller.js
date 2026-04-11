// controllers/auth.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const bcryptSalt = bcrypt.genSaltSync(10);

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            passwordHash: bcrypt.hashSync(password, bcryptSalt),
        });
        res.status(201).json(userDoc);
    } catch (e) {
        res.status(422).json({ message: "Registration failed", error: e.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email });
        if (!userDoc) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordOk = bcrypt.compareSync(password, userDoc.passwordHash);
        if (!isPasswordOk) {
            return res.status(422).json({ message: "Invalid credentials" });
        }

        jwt.sign(
            { email: userDoc.email, id: userDoc._id, name: userDoc.name },
            process.env.JWT_SECRET,
            {},
            (err, token) => {
                if (err) throw err;
                res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' }).status(200).json(userDoc);
            }
        );
    } catch (e) {
        res.status(500).json({ message: "Login failed", error: e.message });
    }
};

export const getProfile = (req, res) => {
    // The user object is attached to req by the authMiddleware
    res.status(200).json(req.user);
};

export const logout = (req, res) => {
    res.cookie("token", "").status(200).json({ message: "Logout successful" });
};