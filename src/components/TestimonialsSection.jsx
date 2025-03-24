import React from 'react';

const testimonialsData = {
  title: "Testimonials",
  reviews: [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Robotics Engineer",
      comment: "The quality of products and technical support from this company is unmatched. Their rapid delivery and excellent service have made them our go-to supplier for all robotics components.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "CTO, AutomationX",
      comment: "We've been partnering with them for over 3 years now. Their extensive inventory and competitive pricing have significantly improved our production timeline.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Academic Researcher",
      comment: "As a university researcher, I appreciate their educational discounts and technical documentation. The products are always as described and arrive on time.",
      rating: 4
    },
    {
      id: 4,
      name: "Emily Wong",
      position: "Startup Founder",
      comment: "Their customer service team went above and beyond to help our startup find the right components within our budget. Truly exceptional service!",
      rating: 5
    }
  ]
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-[#0B1726]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white font-orbitron">{testimonialsData.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#1F1F1F] rounded-lg shadow-md p-6 border border-[#4A90E2] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {/* Star rating */}
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-[#FFB900]' : 'text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic font-rajdhani">"{review.comment}"</p>
              
              <div className="mt-4">
                <p className="font-semibold text-[#6FA5C8] font-orbitron">{review.name}</p>
                <p className="text-sm text-gray-400 font-rajdhani">{review.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;