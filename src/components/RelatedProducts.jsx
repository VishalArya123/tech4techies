import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RelatedProducts = ({ products }) => {
  // Use a ref for the scrollable container
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // If no related products, show placeholders
  if (!products || products.length === 0) {
    products = [
      {
        id: 101,
        name: "Raspberry Pi 4 Model B",
        slug: "raspberry-pi-4",
        price: 59.99,
        image: "/api/placeholder/250/200",
        rating: 4.9,
      },
      {
        id: 102,
        name: "ESP32 Development Board",
        slug: "esp32-board",
        price: 12.99,
        image: "/api/placeholder/250/200",
        rating: 4.7,
      },
      {
        id: 103,
        name: "Arduino Uno R3",
        slug: "arduino-uno",
        price: 24.99,
        image: "/api/placeholder/250/200",
        rating: 4.8,
      },
      {
        id: 104,
        name: "Robot Kit for Beginners",
        slug: "robot-kit",
        price: 89.99,
        image: "/api/placeholder/250/200",
        rating: 4.6,
      }
    ];
  }

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map(product => (
          <Link 
            key={product.id} 
            to={product.slug ? `/product/${product.slug}` : "#"}
            className="flex-shrink-0 w-64 border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;