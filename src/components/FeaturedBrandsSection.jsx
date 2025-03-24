import React from 'react';

const brandsData = {
  title: "Featured Brands",
  description: "We partner with the world's leading robotics manufacturers to bring you quality products",
  brands: [
    {
      id: 1,
      name: "RoboTech",
      logo: "/assets/brands/robo-tech.png"
    },
    {
      id: 2,
      name: "AutomationX",
      logo: "/assets/brands/automation-x.png"
    },
    {
      id: 3,
      name: "MechaSystems",
      logo: "/assets/brands/mecha-systems.png"
    },
    {
      id: 4,
      name: "IntelliRobotics",
      logo: "/assets/brands/intelli-robotics.png"
    },
    {
      id: 5,
      name: "NanoBot",
      logo: "/assets/brands/nano-bot.png"
    },
    {
      id: 6,
      name: "TechDynamics",
      logo: "/assets/brands/tech-dynamics.png"
    },
    {
      id: 7,
      name: "RoboCore",
      logo: "/assets/brands/robo-core.png"
    },
    {
      id: 8,
      name: "PrecisionAutomation",
      logo: "/assets/brands/precision-automation.png"
    }
  ]
};

const FeaturedBrandsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#0B1726] font-orbitron">{brandsData.title}</h2>
        <p className="text-[#1F1F1F] text-center mb-12 max-w-2xl mx-auto font-rajdhani">
          {brandsData.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brandsData.brands.map((brand) => (
            <div 
              key={brand.id} 
              className="flex items-center justify-center p-6 rounded-lg border border-[#4A90E2] bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:border-[#6FA5C8]"
            >
              {/* For now, using a placeholder div for the logo */}
              <div className="h-20 w-full flex items-center justify-center bg-[#0B1726] rounded">
                <p className="text-center font-medium text-white font-orbitron">{brand.name}</p>
              </div>
              {/* Actual implementation would use:
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-20 max-w-full object-contain" 
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrandsSection;