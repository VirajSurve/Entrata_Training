import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LeftSide.css";
import "./BookCart.css";

function BookCart() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/booking").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="done">
      {bookings.length > 0 &&
        bookings.map((booking) => {
          const startDate = new Date(booking.startDate);
          const endDate = new Date(booking.endDate);

          // Get day, month and year for start and end dates
          const startDay = startDate.getDate();
          const startMonth = startDate.toLocaleString("default", {
            month: "short",
          });
          const endDay = endDate.getDate();
          const endMonth = endDate.toLocaleString("default", {
            month: "short",
          });

          return (
            <div key={booking._id}>
              {booking.place.photos.length > 0 && (
                <div className="book-page1">
                  <div className="top-box flex">
                    <div className="img-div mr-5">
                      <img
                        className="book-img"
                        src={
                          "http://localhost:4000/upload/" +
                          booking.place.photos[0]
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex items-center">
                      <div>
                        <p>here place is required</p>
                        <p className="text-gray-500">here side is required</p>
                        <p>
                          <i className="bi bi-star-fill"></i>
                          here rate is required{" "}
                          <span className="text-gray-500">
                            ((here reviews is required) reviews)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="horizontal-line"></div>
                  </div>

                  <div className="top-box">
                    <div className="mb-2">
                      <p className="text-2xl font-semibold">Your trip</p>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-lg font-medium">Dates</p>
                          <p>
                            {startDay} {startMonth} – {endDay} {endMonth}
                          </p>
                        </div>
                        <div className="underline font-medium cursor-pointer">
                          Edit
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-lg font-medium">Guests</p>
                          <p>1 guest</p>
                        </div>
                        <div className="underline font-medium cursor-pointer">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="horizontal-line"></div>
                  </div>

                  <div className="Middle-box">
                    <p className="text-2xl font-semibold">Price details</p>
                    <div className="flex justify-between mt-2">
                      <p>$81,611.24 x 5 nights</p>
                      <p>here price is required</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="horizontal-line"></div>
                  </div>
                  <div className="Middle-box">
                    <div className="flex justify-between">
                      <p className="text-base font-medium">Total (INR)</p>
                      <p>here price is required</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default BookCart;
