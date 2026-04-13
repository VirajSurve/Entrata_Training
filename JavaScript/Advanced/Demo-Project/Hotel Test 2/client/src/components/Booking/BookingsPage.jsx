// src/components/Booking/BookingsPage.jsx
import { useEffect, useState } from "react";
import AccountNav from "../../AccountNav";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import api from "../../api/axiosConfig";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <>
      <AccountNav />
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
        {bookings?.length > 0 ? (
          bookings.map((booking) => (
            <Link to={`/account/bookings/${booking._id}`} className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden mb-4" key={booking._id}>
              <div className="w-48">
                {booking.place.photos?.[0] && (
                  <img
                    className="object-cover aspect-square"
                    src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${booking.place.photos[0]}`}
                    alt=""
                  />
                )}
              </div>
              <div className="py-3 pr-3 grow">
                  <h2 className="text-xl">{booking.place.title}</h2>
                  <div className="text-sm">
                      <p>
                          <span className="font-semibold">Dates:</span> {format(new Date(booking.checkIn), 'yyyy-MM-dd')} to {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                      </p>
                      <p>
                          <span className="font-semibold">Guests:</span> {booking.numberOfGuests}
                      </p>
                      <p className="text-lg font-bold mt-2">
                          Total price: ${booking.price}
                      </p>
                  </div>
              </div>
            </Link>
          ))
        ) : (
          <p>You have no bookings yet.</p>
        )}
      </div>
    </>
  );
}