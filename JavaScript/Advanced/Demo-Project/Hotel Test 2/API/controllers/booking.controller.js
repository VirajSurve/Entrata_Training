// API/controllers/booking.controller.js
import Booking from "../models/booking.model.js";
import { getUserDataFromRequest } from "../middleware/auth.middleware.js";

export const createBooking = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // CORRECTED: Using original field names to match the updated model and frontend
        const {
            place, startDate, endDate, guests, name, mobile, price
        } = req.body;

        const booking = await Booking.create({
            place, startDate, endDate, guests, name, mobile, price,
            user: userData.id,
        });

        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: "Error creating booking", error: err.message });
    }
};

export const getBookings = async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        const bookings = await Booking.find({ user: userData.id }).populate('place');
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: "Error fetching bookings", error: err.message });
    }
};