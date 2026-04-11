import React from "react";
import "./Imagesmore.css";

function Imagesmore({ place, showAllPhotos, setAllPhotos }) {
  const predefinedClasses = [
    "house1 aspect-square object-cover",
    "interior1 aspect-square object-cover",
    "living-room1 aspect-square object-cover",
    "kitchen1 aspect-square object-cover",
    "bathroom1 aspect-square object-cover",
    "extra1 aspect-square object-cover",
  ];

  return (
    <div className="flex justify-center">
      <div className="next-page-more">
        {place.photos.map((image, index) => {
          const className =
            predefinedClasses[index] || "aspect-square object-cover"; // Default class for additional images
          return (
            <img
              key={index}
              src={`http://localhost:4000/upload/${image}`}
              alt={`Image ${index}`}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Imagesmore;
