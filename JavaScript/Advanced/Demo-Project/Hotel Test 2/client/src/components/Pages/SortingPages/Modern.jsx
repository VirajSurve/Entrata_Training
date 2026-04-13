import Nav from "../../Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../Button.jsx";
import "../../../App.css";
import { Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function ModernPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/places").then((response) => {
    //   console.log("Data:", response.data);
      // Filter places based on the perk
      const refined = response.data.filter((item) =>
        item.perks.includes("Modern")
      );
    //   console.log("Refined data:", refined);
      setPlaces(refined);
    });
  }, []);

  return (
    <>
      <CartProvider>
        <Nav />
        <div className="mt-4 gap-x-8 gap-y-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {places.length > 0 &&
            places.map((place) => (
              <div className="container" key={place._id}>
                <div className="heart">
                  <Button place={place} />
                </div>
                <div className="">
                  <Link to={"/place/" + place._id} key={place._id}>
                    <div className="mb-2">
                      {place.photos?.[0] && (
                        <div>
                          <img
                            className="relative box-img"
                            src={
                              "http://localhost:4000/upload/" +
                              place.photos[0]
                            }
                            alt=""
                          />
                          <div className="bi bi-star-fill absolute bottom-3 right-5">
                            {place.rate}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                  <h2 className="font-bold leading-5">{place.address}</h2>
                  <h3 className="place text-sm truncate text-gray-500">
                    {place.title}
                  </h3>
                </div>
                <p className="side">{}</p>
                <p className="price mt-1">
                  <span className="font-bold"> ${place.price} </span>
                  <span id="period">night</span>
                </p>
              </div>
            ))}
        </div>
      </CartProvider>
    </>
  );
}

export default ModernPage;
