// API/models/place.model.js
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    address: { type: String, required: true },
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
    price: Number,
    rate: Number,
    reviews: Number, // <-- CORRECTED: Changed from [String] to Number
    X: Number,
    Y: Number,
    name: String,
});

export default mongoose.model('Place', placeSchema);