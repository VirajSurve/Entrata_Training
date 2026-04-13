// middleware/auth.middleware.js
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-passwordHash');

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = user; // Attach user to the request object
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

// Helper to get user data from token without protecting the route
export const getUserDataFromRequest = (req) => {
    return new Promise((resolve, reject) => {
        const { token } = req.cookies;
        if (!token) {
            return resolve(null);
        }
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
            if (err) return reject(err);
            resolve(userData);
        });
    });
};