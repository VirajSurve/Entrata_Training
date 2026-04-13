// routes/hotel.routes.js
import express from "express";
import { createHotel, updateHotel, getHotels, getHotel } from "../controllers/hotel.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", getHotels);
router.get("/:id", getHotel);

// Admin endpoints
router.post("/", authMiddleware, requireRole("Admin"), createHotel);
router.put("/:id", authMiddleware, requireRole("Admin"), updateHotel);

export default router;
