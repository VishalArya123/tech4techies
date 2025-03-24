import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = ({ message = "Page not found", showHomeLink = true }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        
        <p className="text-xl text-gray-700 mb-6">{message}</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {showHomeLink && (
          <div className="flex justify-center">
            <Link 
              to="/" 
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Homepage
            </Link>
          </div>
        )}
        
        <button 
          onClick={() => window.history.back()} 
          className="mt-4 text-blue-600 hover:text-blue-800 underline text-sm flex items-center mx-auto"
        >
          <ArrowLeft size={14} className="mr-1" /> Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;