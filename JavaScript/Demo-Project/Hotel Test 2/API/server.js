// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';

import { connectDB } from "./config/db.js";

// Import Routes
import authRoutes from "./routes/auth.routes.js";
import placeRoutes from "./routes/place.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import wishlistRoutes from "./routes/wishlist.routes.js";
import uploadRoutes from "./routes/upload.routes.js"; // <-- 1. MAKE SURE THIS IMPORT EXISTS

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // This serves the images

// Connect to Database
connectDB(process.env.MONGO_URI);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/upload', uploadRoutes); // <-- 2. THIS IS THE CRITICAL LINE THAT WAS LIKELY MISSING OR MISCONFIGURED.

// Health check route
app.get("/api/test", (req, res) => {
    res.json("test ok");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});