import React from 'react';
import { ArrowRight } from 'lucide-react';

const productHighlightData = {
  product: {
    name: 'RoboArm Pro X1',
    image: 'https://via.placeholder.com/600x400?text=RoboArm+Pro+X1',
    description: 'Our flagship robotic arm with 6 degrees of freedom, precision control, and programmable interface.',
    specifications: [
      '6-axis movement with 360° rotation',
      'Payload capacity of 2kg',
      'Precision of 0.1mm',
      'Compatible with Arduino and Raspberry Pi',
    ],
    ctaText: 'See More',
    ctaLink: '#',
  },
};

function ProductHighlight() {
  return (
    <section className="container mx-auto px-4 py-16 bg-[#1F1F1F]/5">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#4A90E2]">
        <div className="flex flex-col md:flex-row">
          {/* Product Image (left side) */}
          <div className="md:w-1/2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#FFB900] to-[#FF8C00] transform rotate-45 -translate-x-12 -translate-y-12 z-10"></div>
            <img 
              src={productHighlightData.product.image} 
              alt={productHighlightData.product.name} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0B1726]/70 to-transparent"></div>
          </div>
          
          {/* Product Info (right side) */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <h2 
              className="text-3xl font-bold text-[#0B1726] mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {productHighlightData.product.name}
            </h2>
            <p className="text-lg text-[#1F1F1F] mb-6">
              {productHighlightData.product.description}
            </p>
            
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-3 text-[#0B1726] border-b-2 border-[#4A90E2] pb-2 inline-block"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Key Specifications
              </h3>
              <ul className="space-y-3 mt-4">
                {productHighlightData.product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#6FA5C8] mr-3 text-xl">•</span>
                    <span className="text-[#1F1F1F]">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              className="bg-gradient-to-r from-[#FFB900] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB900] text-white py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 self-start transform hover:translate-x-1 shadow-md"
              onClick={() => alert("Yet to build")}
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              {productHighlightData.product.ctaText}
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;