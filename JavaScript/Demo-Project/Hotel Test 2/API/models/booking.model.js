// API/models/booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    // CORRECTED: Reverting to your original field names for consistency
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    price: { type: Number, required: true },
    guests: { type: Number, required: true }, // Changed from numberOfGuests
});

export default mongoose.model('Booking', bookingSchema);