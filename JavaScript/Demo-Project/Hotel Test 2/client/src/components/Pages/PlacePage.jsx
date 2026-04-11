// src/components/Pages/PlacePage.jsx
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./SecondPage.css"; // We can keep the CSS name for now
import Title from "./PlacePage Components/Title.jsx";
import Images from "./PlacePage Components/images.jsx";
import Information from "./PlacePage Components/Information.jsx";
import Reviews from "./PlacePage Components/Reviews.jsx";
import Mapp from "./PlacePage Components/Mapp.jsx";
import ShowMore from "./PlacePage Components/ShowMore.jsx";
import api from "../../api/axiosConfig.js"; // <-- Import the new api client

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth.current <= 768);

  useEffect(() => {
    if (!id) return;
    const fetchPlace = async () => {
      try {
        // Use the new endpoint
        const { data } = await api.get(`/places/${id}`);
        setPlace(data);
      } catch (error) {
        console.error("Failed to fetch place:", error);
      }
    };
    fetchPlace();
  }, [id]);

  if (!place) return <div>Loading...</div>;

  if (showAllPhotos) {
    return (
       <ShowMore place={place} close={() => setAllPhotos(false)} />
    );
  }

  return (
    <div className="secondpage-main">
      <div className="mt-5">
        <div className="parent-container">
          <Title place={place} />
          <Images place={place} setAllPhotos={setAllPhotos} />
          <Information place={place} />
          {!isSmallScreen && (
            <>
              <Mapp place={place} />
              <Reviews place={place} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}