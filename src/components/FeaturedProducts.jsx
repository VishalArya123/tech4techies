import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const featuredProductsData = {
  title: 'Featured Products',
  viewMoreText: 'View More',
  viewMoreLink: '/shop',
  products: [
    {
      id: 1,
      name: 'Arduino Uno R3',
      image: 'https://via.placeholder.com/300x300?text=Arduino+Uno',
      description: 'Microcontroller board based on the ATmega328P',
      price: '₹450',
      originalPrice: '₹550',
      link: '#',
      inStock: true,
    },
    {
      id: 2,
      name: 'Raspberry Pi 4 Model B',
      image: 'https://via.placeholder.com/300x300?text=Raspberry+Pi',
      description: 'Complete computer on a small single board',
      price: '₹3,990',
      originalPrice: '₹4,500',
      link: '#',
      inStock: true,
    },
    {
      id: 3,
      name: 'Ultrasonic Sensor HC-SR04',
      image: 'https://via.placeholder.com/300x300?text=Ultrasonic+Sensor',
      description: 'Distance measuring sensor module',
      price: '₹120',
      originalPrice: '₹150',
      link: '#',
      inStock: true,
    },
    {
      id: 4,
      name: 'Servo Motor MG996R',
      image: 'https://via.placeholder.com/300x300?text=Servo+Motor',
      description: 'High torque metal gear servo motor',
      price: '₹350',
      originalPrice: '₹400',
      link: '#',
      inStock: true,
    },
    {
      id: 5,
      name: 'NodeMCU ESP8266',
      image: 'https://via.placeholder.com/300x300?text=NodeMCU',
      description: 'WiFi development board for IoT applications',
      price: '₹280',
      originalPrice: '₹320',
      link: '#',
      inStock: false,
    },
    {
      id: 6,
      name: 'Motor Driver L298N',
      image: 'https://via.placeholder.com/300x300?text=Motor+Driver',
      description: 'Dual H-Bridge motor driver for Arduino/Raspberry Pi',
      price: '₹175',
      originalPrice: '₹200',
      link: '#',
      inStock: true,
    },
  ],
};

function ProductCard({ product }) {
  return (
    <div className="bg-[#1F1F1F] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#4A90E2]">
      <a 
        href={product.link} 
        className="block"
        onClick={(e) => {
          e.preventDefault();
          alert("Yet to build");
        }}
      >
        <div className="w-full h-48 bg-white flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-40 object-contain p-4 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>
      <div className="p-4 text-white">
        <a 
          href={product.link} 
          className="block"
          onClick={(e) => {
            e.preventDefault();
            alert("Yet to build");
          }}
        >
          <h3 className="font-orbitron text-lg mb-2 text-[#6FA5C8] hover:text-white transition-colors">{product.name}</h3>
        </a>
        <p className="text-gray-300 text-sm mb-3 font-rajdhani">{product.description}</p>
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-[#FFB900] font-montserrat">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through ml-2 font-rajdhani">{product.originalPrice}</span>
          )}
          {product.originalPrice && (
            <span className="ml-2 bg-[#0B1726] text-[#FFB900] text-xs px-2 py-1 rounded font-montserrat">
              {Math.round(((parseFloat(product.originalPrice.replace(/[₹,]/g, '')) - 
                parseFloat(product.price.replace(/[₹,]/g, ''))) / 
                parseFloat(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% off
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button 
            className={`py-2 px-4 rounded text-sm font-montserrat transition-all duration-300 ${
              product.inStock 
                ? 'bg-gradient-to-r from-[#FFB900] to-[#FF8C00] text-white hover:shadow-md transform hover:-translate-y-1' 
                : 'bg-gray-700 text-gray-300 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
            onClick={() => alert(product.inStock ? "Added to cart!" : "Out of stock!")}
          >
            <ShoppingCart size={16} className="inline mr-1" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <a 
            href={product.link} 
            className="text-[#6FA5C8] hover:text-white text-sm font-montserrat transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("Yet to build");
            }}
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-[##fffffa]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B1726] font-orbitron">{featuredProductsData.title}</h2>
          <a 
            href={featuredProductsData.viewMoreLink} 
            className="text-[#6FA5C8] hover:text-white inline-flex items-center font-montserrat transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("Yet to build");
            }}
          >
            {featuredProductsData.viewMoreText}
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProductsData.products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;