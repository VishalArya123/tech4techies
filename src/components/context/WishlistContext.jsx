import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { currentUser } = useAuth();

  // Load wishlist from localStorage on mount and when user changes
  useEffect(() => {
    if (currentUser) {
      const savedWishlist = localStorage.getItem(`wishlist_${currentUser.id}`);
      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist));
      } else {
        setWishlistItems([]);
      }
    } else {
      setWishlistItems([]);
    }
  }, [currentUser]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`wishlist_${currentUser.id}`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, currentUser]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    if (!currentUser) return { success: false, message: "Please sign in to add items to wishlist" };

    setWishlistItems(prevItems => {
      // Check if item is already in wishlist
      if (prevItems.some(item => item.id === product.id)) {
        return prevItems; // Item already exists
      }

      // Add new item with timestamp
      return [...prevItems, { 
        ...product, 
        addedAt: new Date().toISOString() 
      }];
    });

    return { success: true, message: "Added to wishlist" };
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    if (!currentUser) return;

    setWishlistItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  // Clear wishlist
  const clearWishlist = () => {
    if (!currentUser) return;
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export { WishlistContext };