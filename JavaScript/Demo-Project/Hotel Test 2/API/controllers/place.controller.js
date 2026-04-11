// controllers/place.controller.js
import Place from "../models/place.model.js";

export const createPlace = async (req, res) => {
    try {
        const {
            title, address, addedPhotoes, description, perks,
            extraInfo, checkIn, checkOut, maxGuests, price,
            rate, reviews, X, Y, name
        } = req.body;
        
        const placeDoc = await Place.create({
            owner: req.user.id,
            title, address, photos: addedPhotoes, description, perks,
            extraInfo, checkIn, checkOut, maxGuests, price,
            rate, reviews, X, Y, name
        });

        res.status(201).json(placeDoc);
    } catch (error) {
        res.status(500).json({ message: "Error creating place", error: error.message });
    }
};

export const getUserPlaces = async (req, res) => {
    try {
        const places = await Place.find({ owner: req.user.id });
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user places", error: error.message });
    }
};

export const getPlaceById = async (req, res) => {
    const { id } = req.params;
    try {
        const place = await Place.findById(id);
        if (!place) {
            return res.status(404).json({ message: "Place not found" });
        }
        res.status(200).json(place);
    } catch (error) {
        res.status(500).json({ message: "Error fetching place", error: error.message });
    }
};

export const updatePlace = async (req, res) => {
    try {
        const {
            id, title, address, addedPhotoes, description, perks,
            extraInfo, checkIn, checkOut, maxGuests, price,
            rate, reviews, X, Y, name
        } = req.body;

        const placeDoc = await Place.findById(id);
        if (!placeDoc) {
            return res.status(404).json({ message: "Place not found" });
        }
        if (placeDoc.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: "Forbidden: You are not the owner" });
        }

        placeDoc.set({
            title, address, photos: addedPhotoes, description, perks,
            extraInfo, checkIn, checkOut, maxGuests, price,
            rate, reviews, X, Y, name
        });
        await placeDoc.save();
        res.status(200).json({ message: "Place updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating place", error: error.message });
    }
};

export const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all places", error: error.message });
    }
};