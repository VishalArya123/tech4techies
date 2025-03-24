import React from 'react';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '.././assets/logo.png';

const footerData = {
  companyInfo: {
    logo: "../assets/logo.png",
    contactInfo: {
      phone: "1800 266 6123, 020 68197600",
      hours: "Got Questions? Call us between 9:15 AM to 6:15 PM Monday-Saturday"
    }
  },
  columns: [
    {
      title: "Information",
      links: [
        { name: "Track Your Order", url: "/track-order" },
        { name: "Videos", url: "/videos" },
        { name: "FAQ", url: "/faq" },
        { name: "Careers", url: "/careers" }
      ]
    },
    {
      title: "My Account",
      links: [
        { name: "Cart", url: "/cart" },
        { name: "Checkout", url: "/checkout" },
        { name: "My Account", url: "/account" },
        { name: "Payment Options", url: "/payment-options" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "ABOUT US", url: "/about-us" },
        { name: "Contact Us", url: "/contact-us" },
        { name: "B2B/B2B", url: "/business-services" },
        { name: "Investor Relations", url: "/investor-relations" }
      ]
    },
    {
      title: "Policies",
      links: [
        { name: "Privacy policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Shipping & Refund", url: "/shipping-refund" },
        { name: "E-Waste Collection", url: "/e-waste-collection" }
      ]
    }
  ],
  socialMedia: [
    { icon: <Facebook size={20} />, url: "https://facebook.com" },
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Instagram size={20} />, url: "https://instagram.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
    { icon: <Youtube size={20} />, url: "https://youtube.com" }
  ],
  copyright: "© Tech4Techies is registered trademark of MACPOS LIMITED - All Rights Reserved"
};

const Footer = () => {
  // For development/demo purposes, handling navigation
  const handleNavigation = (url) => {
    alert("Navigation to: " + url + " (Yet to build)");
  };

  return (
    <footer className="bg-slate-800 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Logo and Contact Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              {/* Logo placeholder */}
              <a href="#" className="mr-8">
                <img src={logo} alt="Tech4Techies Robotics" className="h-12 w-auto" />
              </a>
            </div>

            <div className="flex items-start space-x-3 mb-4">
              <PhoneCall className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium font-['Orbitron']">{footerData.companyInfo.contactInfo.phone}</p>
                <p className="text-sm text-gray-300 font-['Rajdhani']">{footerData.companyInfo.contactInfo.hours}</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {footerData.socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-emerald-100 hover:bg-emerald-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(social.url);
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerData.columns.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-emerald-100 font-['Orbitron']">{column.title}</h3>
              <ul className="space-y-2 font-['Rajdhani']">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.url);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 pt-8 mt-8 text-center text-sm text-gray-400 font-['Rajdhani']">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;