import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Chart.css";

function Chart({ placeId }) {
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (placeId) {
      axios
        .get(`http://localhost:4000/places/${placeId}`)
        .then((response) => {
          setPrice(response.data.price);
          setDate(new Date(response.data.date));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [placeId]);

  return (
    <div className="chart-container flex justify-between px-5 fixed left-0 bottom-0 bg-white w-full items-center pt-3 pb-3" >
      <div>
        <p>Price: ${price !== null ? price : "Loading..."}</p>
        <p>Date: {date ? date.toDateString() : "N/A"}</p>
      </div>
      <div>
        <button className="bookbutton1 text-white font-semibold">
          Reserve
        </button>
      </div>
    </div>
  );
}

export default Chart;
