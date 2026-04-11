// src/components/WishlistPage.jsx
import React, { useEffect, useState } from "react";
import { useWishlist } from "../WishlistContext";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import WishlistHeader from "./Header/WishlistHeader.jsx";
import DeletePop from "./DeletePop.jsx";
import api from "../api/axiosConfig.js"; // <-- Import client

function WishlistPage() {
  const { wishlistItems, setWishlistItems, removeFromWishlistState } = useWishlist();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    // Fetch wishlist on component mount
    api.get("/wishlist")
      .then((response) => {
        setWishlistItems(response.data);
      })
      .catch((err) => {
        console.error("Error fetching wishlist:", err);
      });
  }, [setWishlistItems]);

  const openConfirmation = (itemId) => {
    setSelectedItemId(itemId);
    setIsPopupOpen(true);
  };

  const closeConfirmation = () => {
    setSelectedItemId(null);
    setIsPopupOpen(false);
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await api.delete(`/wishlist/${itemId}`);
      removeFromWishlistState(itemId); // Update state via context
      closeConfirmation();
    } catch (err) {
      console.error("Error removing wishlist item:", err);
      alert("Failed to remove item.");
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div>
        <WishlistHeader />
        <h1 className="text-center text-2xl mt-8">Your wishlist is empty</h1>
      </div>
    );
  }

  return (
    <>
      <WishlistHeader />
      <div>
        <div className="mt-8 ml-8 md:ml-28 mb-8 mr-0">
          <h1 className="text-3xl font-semibold">
            Wishlist ({wishlistItems.length})
          </h1>
        </div>

        <div className="centerit">
          <div className="container2">
            {wishlistItems.map((item) => (
              <div key={item._id} className="relative">
                <Link to={`/place/${item.place._id}`}>
                  <img
                    className="box-img2"
                    src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${item.place.photos?.[0] || ""}`}
                    alt={item.place.title}
                  />
                </Link>
                <h2 className="res font-semibold mt-1">{item.place.title}</h2>
                <button onClick={() => openConfirmation(item._id)} className="res text-red-500 underline">
                  Remove
                </button>
              </div>
            ))}
            {isPopupOpen && (
              <DeletePop
                itemId={selectedItemId}
                onClose={closeConfirmation}
                onRemove={handleRemoveItem}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;