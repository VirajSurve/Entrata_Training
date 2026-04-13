import React from "react";
import Container from "./container";
import Places from "../places";

function App() {
  return (
    <div className="each-card">
      {Places.map((place, index) => (
        <Container
          key={index}
          // img={place.imgURL}
          place={place.place}
          rate={place.rate}
          side={place.side}
          price={place.price}
        />
      ))}
    </div>
  );
}

export default App;
