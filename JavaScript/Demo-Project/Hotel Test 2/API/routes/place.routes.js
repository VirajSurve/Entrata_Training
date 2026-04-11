// routes/place.routes.js
import express from "express";
import {
    createPlace,
    getUserPlaces,
    getPlaceById,
    updatePlace,
    getAllPlaces
} from "../controllers/place.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all places (public route)
router.get("/", getAllPlaces);

// Get a specific place by ID (public route)
router.get("/:id", getPlaceById);

// Routes requiring authentication
router.post("/", authMiddleware, createPlace);
router.put("/", authMiddleware, updatePlace); // Using root and sending ID in body is an option, or use router.put("/:id", ...)
router.get("/user-places", authMiddleware, getUserPlaces);

export default router;