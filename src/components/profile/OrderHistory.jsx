import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Clock, Package, Check, AlertTriangle } from 'lucide-react';

const OrderHistory = () => {
  const { user } = useAuth();
  
  // This would come from an API in a real application
  const orders = user.orders || [];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing':
        return <Clock size={18} className="text-orange-500" />;
      case 'Shipped':
        return <Package size={18} className="text-blue-500" />;
      case 'Delivered':
        return <Check size={18} className="text-green-500" />;
      case 'Cancelled':
        return <AlertTriangle size={18} className="text-red-500" />;
      default:
        return <Clock size={18} className="text-gray-500" />;
    }
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <img 
          src="/api/placeholder/200/200" 
          alt="No orders" 
          className="mx-auto mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
        <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
        <Link 
          to="/shop" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg overflow-hidden">
            {/* Order Header */}
            <div className="bg-gray-50 p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
              </div>
              
              <div className="mt-2 md:mt-0 flex items-center">
                {getStatusIcon(order.status)}
                <span className="ml-2 font-medium">{order.status}</span>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="p-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex py-4 border-b last:border-b-0">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                    <p className="text-gray-800 font-medium mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Footer */}
            <div className="bg-gray-50 p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-gray-600">Total: <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span></p>
              </div>
              
              <div className="mt-3 md:mt-0 space-x-3">
                {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                  <Link
                    to={`/profile/tracking/${order.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      // Set the active tab to tracking in the parent component
                      // This would be handled through context or props in a real app
                    }}
                  >
                    Track Order
                  </Link>
                )}
                
                <button
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    // Download invoice functionality
                    alert("Invoice download functionality would be implemented here");
                  }}
                >
                  Invoice
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;