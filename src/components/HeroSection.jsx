import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const heroData = {
  serviceLinks: [
    { text: 'Raspberry Pi', href: '#', icon: '🤖' },
    { text: 'Arduino', href: '#', icon: '⚙️' },
    { text: 'Sensors', href: '#', icon: '📡' },
    { text: 'Motors & Drivers', href: '#', icon: '🔌' },
    { text: 'Development Boards', href: '#', icon: '🛠️' },
    { text: 'IoT Components', href: '#', icon: '🌐' },
    { text: 'Robotics Kits', href: '#', icon: '🦾' },
  ],
  carouselSlides: [
    {
      id: 1,
      image: '/src/assets/carousel1.jpg',
      imageAlt: 'Advanced Robotics Solutions',
      title: 'Advanced Robotics Solutions',
      description: 'Discover our latest range of robotics products for your projects',
      ctaText: 'Shop Now',
      ctaLink: '#',
    },
    {
      id: 2,
      image: '/src/assets/carousel2.jpg',
      imageAlt: 'Educational Robotics Kits',
      title: 'Educational Robotics Kits',
      description: 'Perfect for classrooms and STEM learning',
      ctaText: 'Explore Kits',
      ctaLink: '#',
    },
    {
      id: 3,
      image: '/src/assets/carousel3.jpg',
      imageAlt: 'New Arrivals',
      title: 'New Arrivals',
      description: 'Check out the latest additions to our collection',
      ctaText: 'See What\'s New',
      ctaLink: '#',
    },
  ],
};

// Placeholder images for carousel - in real app these would be actual product images
const placeholderImages = [
  'https://via.placeholder.com/800x400?text=Advanced+Robotics',
  'https://via.placeholder.com/800x400?text=Educational+Kits', 
  'https://via.placeholder.com/800x400?text=New+Arrivals'
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === heroData.carouselSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 md:py-12" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Service Links (20% width on desktop) */}
        <div className="md:w-1/5 bg-[#0B1726] rounded-lg shadow-lg p-4">
          <h3 className="font-medium text-lg mb-3 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>Quick Links</h3>
          <ul className="space-y-2">
            {heroData.serviceLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="flex items-center py-2 px-3 text-white hover:bg-[#1F1F1F] hover:text-[#6FA5C8] rounded-md transition-all duration-300 transform hover:translate-x-1"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Yet to build");
                  }}
                >
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.text}</span>
                  <ChevronRight size={16} className="ml-auto text-[#6FA5C8]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Carousel (80% width on desktop) */}
        <div className="md:w-4/5 relative rounded-lg overflow-hidden shadow-lg h-96 border-2 border-[#4A90E2]">
          {heroData.carouselSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={placeholderImages[index]} 
                alt={slide.imageAlt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726]/80 to-transparent flex flex-col justify-center px-10">
                <h2 
                  className="text-white text-3xl md:text-4xl font-bold mb-3 transform transition-transform duration-500 translate-y-0"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {slide.title}
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-md">{slide.description}</p>
                <button 
                  className="bg-gradient-to-r from-[#FFB900] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB900] text-white py-2 px-6 rounded-md inline-flex items-center w-max transition-all duration-300 transform hover:scale-105 shadow-md"
                  onClick={() => alert("Yet to build")}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  {slide.ctaText}
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
          
          {/* Carousel Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
            {heroData.carouselSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#FFB900] to-[#FF8C00] w-6' 
                    : 'bg-white/50 hover:bg-[#6FA5C8]/70'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;