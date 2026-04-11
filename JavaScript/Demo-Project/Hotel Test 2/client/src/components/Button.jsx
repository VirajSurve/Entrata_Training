import React, { useState, useEffect } from "react";
import { useWishlist } from "../WishlistContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig.js"; // <-- Import client

function Button({ place }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistItemId, setWishlistItemId] = useState(null);
  const { removeFromWishlistState } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfInWishlist = async () => {
      try {
        // Use new endpoint to check if the place is in the user's wishlist
        const { data } = await api.get('/wishlist/exists', {
          params: { placeId: place._id },
        });
        setIsInWishlist(data.exists);
        if (data.exists) {
          setWishlistItemId(data.item._id);
        }
      } catch (error) {
        // This is expected if the user is not logged in
      }
    };
    checkIfInWishlist();
  }, [place._id]);

  const handleWishlistToggle = async (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    try {
      if (isInWishlist) {
        // Remove from wishlist
        await api.delete(`/wishlist/${wishlistItemId}`);
        removeFromWishlistState(wishlistItemId); // Update context state
        setIsInWishlist(false);
        setWishlistItemId(null);
      } else {
        // Add to wishlist
        const { data } = await api.post('/wishlist', { placeId: place._id });
        // No need to update context here, as it's mainly for the wishlist page
        setIsInWishlist(true);
        setWishlistItemId(data._id);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Please log in to add items to your wishlist.");
        navigate("/login");
      } else {
        console.error("Error handling wishlist:", err);
      }
    }
  };

  return (
    <button
      className="btn mr-3"
      style={{ color: isInWishlist ? 'red' : 'white' }}
      onClick={handleWishlistToggle}
    >
      <i className={isInWishlist ? "bi bi-heart-fill" : "bi bi-heart"}></i>
    </button>
  );
}

export default Button;