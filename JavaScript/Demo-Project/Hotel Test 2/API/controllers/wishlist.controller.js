// controllers/wishlist.controller.js
import Wishlist from "../models/wishlist.model.js";
import { getUserDataFromRequest } from "../middleware/auth.middleware.js";

export const addToWishlist = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { placeId } = req.body;

        const wishlistItem = await Wishlist.create({
            user: userData.id,
            place: placeId,
        });
        res.status(201).json(wishlistItem);
    } catch (err) {
        // Handle unique constraint violation (item already in wishlist)
        if (err.code === 11000) {
            return res.status(409).json({ message: "Item already in wishlist." });
        }
        res.status(500).json({ message: "Error adding to wishlist", error: err.message });
    }
};

export const getWishlist = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const wishlistItems = await Wishlist.find({ user: userData.id }).populate('place');
        res.status(200).json(wishlistItems);
    } catch (err) {
        res.status(500).json({ message: "Error fetching wishlist", error: err.message });
    }
};

export const removeFromWishlist = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { id } = req.params; // Get wishlist item ID from URL params

        const item = await Wishlist.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Wishlist item not found" });
        }
        if (item.user.toString() !== userData.id.toString()) {
            return res.status(403).json({ message: "Forbidden: Not authorized to delete this item" });
        }

        await Wishlist.findByIdAndDelete(id);
        res.status(200).json({ message: "Removed from wishlist" });

    } catch (err) {
        res.status(500).json({ message: "Error removing from wishlist", error: err.message });
    }
};

export const checkWishlist = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            // If no user, the item can't be in their wishlist
            return res.status(200).json({ exists: false });
        }
        const { placeId } = req.query;

        const item = await Wishlist.findOne({ user: userData.id, place: placeId });

        if (item) {
            res.status(200).json({ exists: true, item });
        } else {
            res.status(200).json({ exists: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Error checking wishlist", error: error.message });
    }
};