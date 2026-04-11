// routes/booking.routes.js
import express from "express";
import { createBooking, getBookings } from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// All booking routes should be protected
router.use(authMiddleware);

router.post("/", createBooking);
router.get("/", getBookings);

export default router;