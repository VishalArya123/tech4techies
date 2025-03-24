import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserDetails from './UserDetails';
import OrderHistory from './OrderHistory';
import OrderTracking from './OrderTracking';
import WishlistItems from './WishlistItems';
import CartItems from './CartItems';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('user-details'); // Default to user details tab

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect to home page if user is not logged in
    }
  }, [user, navigate]);

  // If user is not logged in, render nothing (redirection will happen via useEffect)
  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4 bg-white rounded-lg shadow p-4">
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <span className="text-blue-600 font-bold text-xl">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
          
          <nav>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('user-details')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'user-details' 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Personal Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'orders' 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  My Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('tracking')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'tracking' 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Order Tracking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'wishlist' 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  My Wishlist
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('cart')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === 'cart' 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  My Cart
                </button>
              </li>
              <li className="border-t mt-4 pt-4">
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4 bg-white rounded-lg shadow p-6">
          {activeTab === 'user-details' && <UserDetails />}
          {activeTab === 'orders' && <OrderHistory />}
          {activeTab === 'tracking' && <OrderTracking />}
          {activeTab === 'wishlist' && <WishlistItems />}
          {activeTab === 'cart' && <CartItems />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;