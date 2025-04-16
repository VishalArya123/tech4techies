import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistItems = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Handle moving an item from wishlist to cart
  const handleMoveToCart = (product) => {
    const added = addToCart(product, 1);
    if (added) {
      removeFromWishlist(product.id);
      // Optional: Add success notification here
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-4">Items you add to your wishlist will appear here.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(product => (
            <div 
              key={product.id} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image || "/api/placeholder/300/200"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold">Out of Stock</span>
                    </div>
                  )}
                </Link>
              </div>
              
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                </Link>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center py-2 px-4 rounded ${
                      product.inStock 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Move to Cart
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="flex items-center justify-center p-2 rounded text-red-600 hover:bg-red-100"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistItems;