// src/components/Pages/IndexPage.jsx
import { useEffect, useState } from "react";
import Button from "../Button.jsx";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./IndexPage.css";
import Header1 from "../Header/Header1.jsx";
import api from "../../api/axiosConfig.js"; // <-- Import client

function IndexPage() {
  const [places, setPlaces] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    // We can enhance this later to filter on the backend
    api.get("/places").then((response) => {
      if (category) {
        const filteredPlaces = response.data.filter((place) =>
          place.perks.includes(category)
        );
        setPlaces(filteredPlaces);
      } else {
        setPlaces(response.data);
      }
    });
  }, [category]);

  return (
    <div className="m-0 p-0">
      <Header1 />
      <div className="app-container">
        <CartProvider>
          <div className="each-card">
            {places.length > 0 &&
              places.map((place) => (
                <div className="container" key={place._id}>
                  <div className="heart">
                    <Button place={place} />
                  </div>
                  <Link to={"/place/" + place._id}>
                    {place.photos?.[0] && (
                      <div className="mb-2">
                        <img
                          className="box-img"
                          // Use the environment variable for the base URL
                          src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${place.photos[0]}`}
                          alt={place.title}
                        />
                      </div>
                    )}
                  </Link>
                  <div className="varad">
                    <h2 className="font-bold leading-5">{place.address}</h2>
                  </div>
                  <p className="side">{place.title}</p>
                  <p className="price mt-1">
                    <span className="font-bold">${place.price}</span>
                    <span id="period"> night</span>
                  </p>
                </div>
              ))}
          </div>
        </CartProvider>
      </div>
    </div>
  );
}

export default IndexPage;