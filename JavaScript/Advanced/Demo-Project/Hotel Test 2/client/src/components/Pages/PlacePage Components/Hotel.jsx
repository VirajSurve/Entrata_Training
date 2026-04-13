import React from "react";
import "./Hotel.css";

export default function Hotel({place}) {
  return (
    <div>
      <div className="row1">
        <p>
          <i class="bi bi-router"></i>
        </p>
        <p className="p1">
          {" "}
          Dedicated workspace <br />
          <span id="p1">
            A common area with wifi that’s well suited for working.
          </span>
        </p>
      </div>

      <div className="row2">
        <p>
          <i class="bi bi-emoji-sunglasses"></i>
        </p>
        <p className="p2">
          {place.name} is a Superhost <br />
          <span id="p2">Superhosts are experienced, highly rated Hosts.</span>
        </p>
      </div>

      <div className="row3">
        <p>
          <i class="bi bi-calendar4-event"></i>
        </p>
        <p className="p3">
          Free cancellation after 2 days of booking <br />
          <span id="p3">Get a full refund if you change your mind.</span>
        </p>
      </div>
      <hr />
    </div>
  );
}
