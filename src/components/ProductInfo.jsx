import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useCart } from './context/CartContext';
import { useWishlist } from './context/WishlistContext';

const ProductInfo = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
  };

  const handleWishlistClick = () => {
    if (isInWishlist(data.id)) {
      removeFromWishlist(data.id);
    } else {
      addToWishlist(data);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
      
      {/* Brand */}
      <p className="text-gray-600 mb-4">Brand: <span className="font-medium">{data.brand}</span></p>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 mr-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < Math.floor(data.rating) ? "currentColor" : "none"}
              className={i < Math.floor(data.rating) ? "" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-gray-600">{data.rating} Rating</span>
      </div>
      
      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-900">${data.price.toFixed(2)}</span>
          {data.originalPrice > data.price && (
            <>
              <span className="ml-2 text-gray-500 line-through">${data.originalPrice.toFixed(2)}</span>
              <span className="ml-2 bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">
                SAVE {data.discount}%
              </span>
            </>
          )}
        </div>
      </div>
      
      {/* Availability */}
      <div className="mb-6">
        <p className={`${data.inStock ? 'text-green-600' : 'text-red-600'} font-medium`}>
          {data.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
      
      {/* Short Description */}
      <div className="mb-6">
        <p className="text-gray-700">{data.description.split('.')[0]}.</p>
      </div>
      
      {/* Quantity Selector */}
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center">
          <button 
            onClick={decrementQuantity}
            className="border border-gray-300 rounded-l px-3 py-2 bg-gray-100 hover:bg-gray-200"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="border-t border-b border-gray-300 text-center w-16 py-2"
          />
          <button 
            onClick={incrementQuantity}
            className="border border-gray-300 rounded-r px-3 py-2 bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${
            data.inStock 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          } flex-1`}
          disabled={!data.inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
        
        <button
          className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
            data.inStock 
              ? 'bg-gray-900 text-white hover:bg-gray-800' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } flex-1`}
          disabled={!data.inStock}
        >
          Buy Now
        </button>
      </div>
      
      {/* Wishlist and Share */}
      <div className="flex space-x-4 mb-6">
        <button 
          className="flex items-center text-gray-600 hover:text-blue-600"
          onClick={handleWishlistClick}
        >
          <Heart size={20} className="mr-2" fill={isInWishlist(data.id) ? "currentColor" : "none"} />
          {isInWishlist(data.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
        
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <Share2 size={20} className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;