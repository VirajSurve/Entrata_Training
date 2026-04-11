import Booking from "../models/booking.model.js";
import Hotel from "../models/hotel.model.js";

function buildDateRangeArray(startDate, endDate) {
  const arr = [];
  const cur = new Date(startDate);
  cur.setHours(0,0,0,0);
  const end = new Date(endDate);
  end.setHours(0,0,0,0);

  while (cur <= end) {
    arr.push(new Date(cur)); 
    cur.setDate(cur.getDate() + 1);
  }
  return arr;
}

export const createBooking = async (req, res) => {
  try {
    const { hotelId, checkIn, checkOut } = req.body;
    const customer = req.user;

    const hotel = await Hotel.findById(hotelId);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });

    const dateRange = buildDateRangeArray(checkIn, checkOut);

    const overlaps = hotel.bookedDates.some(range => {
      const existingStart = new Date(range[0]).setHours(0,0,0,0);
      const existingEnd = new Date(range[range.length - 1]).setHours(0,0,0,0);
      const newStart = dateRange[0].setHours(0,0,0,0);
      const newEnd = dateRange[dateRange.length - 1].setHours(0,0,0,0);
      return !(newEnd < existingStart || newStart > existingEnd);
    });

    if (overlaps) return res.status(400).json({ message: "Selected dates overlap an existing booking" });

    hotel.bookedDates.push(dateRange);
    hotel.availability = false;
    await hotel.save();

    const totalPrice = (dateRange.length) * (hotel.pricePerNight || 0);

    const booking = await Booking.create({
      customer: customer._id,
      hotel: hotel._id,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      totalPrice,
      status: "Confirmed"
    });

    res.status(201).json({ booking, hotel });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


export const getBookingHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const pastBookings = await Booking.find({
      customer: userId,
      checkOut: { $lt: today },
    })
      .populate("hotel")
      .sort({ checkOut: -1 }); 

    res.json(pastBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getActiveAndUpcomingBookings = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeBookings = await Booking.find({
      customer: userId,
      checkOut: { $gte: today },  
    })
      .populate("hotel")
      .sort({ checkIn: 1 });

    res.json(activeBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


