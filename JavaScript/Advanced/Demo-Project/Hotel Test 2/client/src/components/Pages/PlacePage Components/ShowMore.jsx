import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Imagesmore from "./Imagesmore";
import "./ShowMore.css";
import { Link } from "react-router-dom";

function ShowMore() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/places/${id}`).then((response) => {
        setPlace(response.data);
      });
    }
  }, [id]);

  if (!place) return null;

function ShowMore({ close }) {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/places/${id}`).then((response) => {
        setPlace(response.data);
      });
    }
  }, [id]);

  if (!place) return null;

  return (
    <>
      <div className="model-wrapper1"></div>
      <div className="show-more-content flex justify-between ml-7 mr-7 mt-5 font-medium z-50">
        <div className="cir" onClick={close}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="flex gap-7">
          <button>
            <i className="bi bi-upload mr-1"></i>
            <span className="S">Share</span>
          </button>
          <button className="mr-14" id="btnh">
            <i className="bi bi-heart mr-1"></i>
            <span className="S">Save</span>
          </button>
        </div>
      </div>
      <div className="more">
        <Imagesmore
          place={place}
          showAllPhotos={showAllPhotos}
          setAllPhotos={setAllPhotos}
        />
      </div>
    </>
  );
}
}

export default ShowMore;
