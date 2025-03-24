import React, { useState } from 'react';
import { Send, Phone, Clock } from 'lucide-react';

const contactData = {
  title: "Get In Touch",
  subtitle: "Send Us a Message",
  supportInfo: {
    phone: "1800 266 6123, 020 68197600",
    hours: "Got Questions? Call us between 9:15 AM to 6:15 PM Monday-Saturday"
  },
  formFields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe"
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your@email.com"
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+1 (123) 456-7890"
    },
    {
      id: "message",
      label: "Your Message",
      type: "textarea",
      placeholder: "How can we help you?"
    }
  ]
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert - would connect to backend in actual implementation
    alert("Form submitted! This would normally connect to a backend service.");
    console.log(formData);
  };

  return (
    <section className="py-16 bg-[#0B1726]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white font-orbitron">{contactData.title}</h2>

        <div className="max-w-4xl mx-auto bg-[#1F1F1F] rounded-lg shadow-md overflow-hidden border border-[#4A90E2]">
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-[#6FA5C8] font-orbitron">{contactData.subtitle}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                {contactData.formFields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-white mb-1 font-rajdhani">
                      {field.label}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        rows={4}
                        className="w-full px-3 py-2 border border-[#4A90E2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6FA5C8] bg-[#0B1726] text-white font-rajdhani"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full px-3 py-2 border border-[#4A90E2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6FA5C8] bg-[#0B1726] text-white font-rajdhani"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#FFB900] to-[#FF8C00] text-white py-3 px-6 rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center font-montserrat transform hover:-translate-y-1"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[#4A90E2]">
              <div className="flex items-start space-x-3 mb-2">
                <Phone className="w-5 h-5 text-[#6FA5C8] mt-1" />
                <p className="text-white font-medium font-rajdhani">{contactData.supportInfo.phone}</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#6FA5C8] mt-1" />
                <p className="text-gray-300 text-sm font-rajdhani">{contactData.supportInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;