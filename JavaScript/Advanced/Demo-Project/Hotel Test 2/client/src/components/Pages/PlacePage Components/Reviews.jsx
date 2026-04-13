import React from "react";
import "./Reviews.css";

export default function Reviews({ place }) {
  return (
    <div className="last">
      <hr />
      <div className="first-line">
        <p>
          <i className="bi bi-star-fill end"></i>
          {place.rate} · {place.reviews} reviews
        </p>
      </div>
      <div className="row">
        {[
          { label: "Cleanliness", score: "4.8", icon: "spray.png" },
          { label: "Accuracy", score: "4.8", icon: "tick.png" },
          { label: "Check-in", score: "4.9", icon: "key.png" },
          { label: "Communication", score: "5.0", icon: "message.png" },
          { label: "Location", score: "4.8", icon: "location.png" },
          { label: "Value", score: "4.8", icon: "tag.png" },
        ].map((item, index) => (
          <div className="review-item" key={index}>
            <div className="pl1">
              <p>
                {item.label} <br />
                {item.score}
              </p>
              <img className="icon" src={`/villa_images/icons/${item.icon}`} alt={item.label} />
            </div>
            {index < 5 && <div className="vline"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
