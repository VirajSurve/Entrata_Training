// server.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";

// Import routes & cron so they register
import authRoutes from "./routes/auth.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import "./cron/cleanupBookedDates.js"; // start cron

const app = express();
app.use(express.json());

// Connect DB
await connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

// Health check
app.get("/", (req, res) => res.send("Plan My Stay API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
