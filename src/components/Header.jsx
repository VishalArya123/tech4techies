import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Phone, HelpCircle, Package, MapPin } from 'lucide-react';
import logo from '.././assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCart } from './context/CartContext';

const headerData = {
  topBar: {
    phone: '1800 266 6123',
    links: [
      { text: 'Customer Support', href: '#', icon: <HelpCircle size={14} /> },
      { text: 'My Orders', href: '#', icon: <Package size={14} /> },
      { text: 'Track Your Order', href: '#', icon: <MapPin size={14} /> },
      { text: 'My Account', href: '#', icon: <User size={14} /> },
    ],
  },
  navigation: {
    mainLinks: [
      { text: 'Home', href: '/' },
      { text: 'Shop', href: '/shop' },
      { text: 'Services', href: '#' },
      { text: 'Contact Us', href: '#' },
      { text: 'FAQs', href: '#' },
    ],
  }
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartItemsCount = cart?.length || 0;
  const cartTotal = cart?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      // Toggle dropdown when already authenticated
      toggleProfileDropdown();
    } else {
      // If user is not logged in, open the auth modal
      loginWithRedirect();
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileDropdownOpen && !event.target.closest('.profile-dropdown-container')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  return (
    <header className="border-b border-gray-700" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      {/* Top Bar */}
      <div className="bg-[#0B1726] text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center">
            <a href="tel:18002666123" className="mr-4 hover:text-[#6FA5C8] transition-colors duration-300 flex items-center">
              <Phone size={14} className="mr-1" /> {headerData.topBar.phone}
            </a>
            <a href="#" className="hidden md:flex items-center hover:text-[#6FA5C8] transition-colors duration-300 mr-4">
              {headerData.topBar.links[0].icon}
              <span className="ml-1">{headerData.topBar.links[0].text}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {headerData.topBar.links.slice(1).map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:text-[#6FA5C8] transition-colors duration-300 hidden md:flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  if (isAuthenticated) {
                    navigate('/profile');
                  } else {
                    loginWithRedirect();
                  }
                }}
              >
                {link.icon}
                <span className="ml-1">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto py-4 px-4 md:px-8 bg-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="mr-8">
              <img src={logo} alt="Tech4Techies Robotics" className="h-12 w-auto" />
            </a>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative rounded-full overflow-hidden flex-grow max-w-md bg-gray-100">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 bg-gray-100 focus:outline-none text-[#0B1726]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="bg-gradient-to-r from-[#FFB900] to-[#FF8C00] p-2 text-white hover:opacity-90 transition duration-300"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center">
            <Link to="/profile" className="p-2 text-[#0B1726] hover:text-[#4A90E2] transition-colors duration-300 relative group">
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF8C00] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
              <div className="hidden group-hover:block absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-3 px-4 z-10 border border-gray-200">
                {cartItemsCount > 0 ? (
                  <>
                    <p className="text-sm text-[#1F1F1F]">{cartItemsCount} item(s) in cart</p>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <span className="font-medium text-[#0B1726]">₹{cartTotal.toFixed(2)}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-[#1F1F1F]">Your cart is empty</p>
                )}
              </div>
            </Link>
            <div className="hidden md:flex items-center ml-4">
              <span className="text-sm font-medium text-[#0B1726]">₹{cartTotal.toFixed(2)}</span>
            </div>
            
            {/* Sign In / Profile */}
            <div className="ml-6 relative profile-dropdown-container">
              <button 
                onClick={handleAuthClick}
                className="py-2 px-4 text-[#0B1726] bg-gray-100 rounded-full hover:bg-[#6FA5C8] hover:text-white transition duration-300 flex items-center"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                <User size={20} />
                <span className="ml-2 hidden md:inline text-sm">
                  {isAuthenticated ? (user?.name || 'My Profile') : 'Sign In'}
                </span>
              </button>
              {isAuthenticated && isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 border border-gray-200">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-[#0B1726] hover:bg-[#6FA5C8] hover:text-white transition-colors duration-300 w-full text-left"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                      setIsProfileDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-[#0B1726] hover:bg-[#6FA5C8] hover:text-white transition-colors duration-300 w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="ml-4 p-2 md:hidden text-[#0B1726] hover:text-[#4A90E2] transition-colors duration-300" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="flex items-center rounded-full overflow-hidden bg-gray-100">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 bg-gray-100 focus:outline-none text-[#0B1726]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gradient-to-r from-[#FFB900] to-[#FF8C00] p-2 text-white hover:opacity-90 transition duration-300">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`mt-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8">
            {headerData.navigation.mainLinks.map((link, index) => (
              <li key={index} className="group relative py-2 md:py-0">
                {link.text === 'Shop' ? (
                  <Link 
                    to="/shop" 
                    className="text-[#0B1726] hover:text-[#4A90E2] transition-colors duration-300 flex items-center font-medium"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-[#0B1726] hover:text-[#4A90E2] transition-colors duration-300 flex items-center font-medium"
                    onClick={link.text !== 'Home' ? (e) => {
                      e.preventDefault();
                      alert("This section is under development!");
                    } : undefined}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;