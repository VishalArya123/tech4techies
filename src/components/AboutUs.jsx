import React from 'react';
import { Truck, Headset, Grid3X3 } from 'lucide-react';

const aboutUsData = {
  title: 'About Us',
  strengths: [
    {
      title: 'Same Day Shipping',
      description: 'Orders placed before 2 PM are shipped the same day',
      icon: Truck,
    },
    {
      title: 'Dedicated Customer Service',
      description: '24/7 support for all your robotics needs',
      icon: Headset,
    },
    {
      title: '140+ Brands Available',
      description: 'Wide selection from top robotics manufacturers',
      icon: Grid3X3,
    },
  ],
};

function AboutUs() {
  return (
    <section className="py-16 px-4 bg-[#0B1726] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-orbitron">{aboutUsData.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutUsData.strengths.map((strength, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 border border-[#4A90E2] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-[#1F1F1F] hover:bg-[#0B1726]"
            >
              <div className="w-16 h-16 bg-[#6FA5C8] rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                <strength.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center font-orbitron text-[#6FA5C8]">{strength.title}</h3>
              <p className="text-gray-300 text-center font-rajdhani">{strength.description}</p>
            </div>
          ))}
        </div>
        
        {/* Repeated for emphasis (as per wireframe) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUsData.strengths.map((strength, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 border border-[#4A90E2] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-[#1F1F1F] hover:bg-[#0B1726]"
            >
              <div className="w-16 h-16 bg-[#6FA5C8] rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                <strength.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center font-orbitron text-[#6FA5C8]">{strength.title}</h3>
              <p className="text-gray-300 text-center font-rajdhani">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;