import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const removeFromWishlistState = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item._id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems, removeFromWishlistState }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);