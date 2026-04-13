// config/db.js
import mongoose from "mongoose";

export const connectDB = async (mongoUri) => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};