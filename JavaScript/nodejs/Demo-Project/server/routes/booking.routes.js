// routes/booking.routes.js
import express from "express";
import { createBooking } from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/", authMiddleware, createBooking); // create booking (Customer)


// router.get("/my-bookings", authMiddleware, getUserBookings);
// router.get("/my-bookings/latest", authMiddleware, getLatestBooking);
export default router;
