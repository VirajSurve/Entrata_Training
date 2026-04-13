// src/components/Pages/PlacesPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../../AccountNav.jsx";
import api from "../../api/axiosConfig.js"; // <-- Import client

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Use the new endpoint to fetch only the user's places
    api.get('/places/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link to={"/account/places/new"} className="inline-flex gap-1 bg-primary py-2 px-4 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          Add new Place
        </Link>

        <div className="mt-4 mb-4">
          <h2 className="text-xl font-bold mb-2">List of your Places</h2>
          {places.length > 0 && places.map(place => (
            <Link to={`/account/places/${place._id}`} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl mb-4" key={place._id}>
              <div className="flex h-32 w-32 bg-gray-300 grow shrink-0 rounded-2xl overflow-hidden">
                {place.photos.length > 0 && (
                  <img 
                    className="object-cover w-full h-full" 
                    src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${place.photos[0]}`} 
                    alt="" />
                )}
              </div>
              <div className="grow-0 shrink text-left">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}