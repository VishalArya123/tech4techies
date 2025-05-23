import React, { useState } from 'react';
import { CheckCircle, Circle, Package, Truck, Home, AlertTriangle } from 'lucide-react';
import { useOrders } from '../context/OrdersContext';
import { useAuth0 } from '@auth0/auth0-react';

const OrderTracking = () => {
  const { orders, cancelOrder } = useOrders();
  const { isAuthenticated } = useAuth0();
  const [trackingId, setTrackingId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Filter only active orders (not Delivered or Cancelled)
  const activeOrders = orders.filter(
    order => order.status !== 'Delivered' && order.status !== 'Cancelled'
  );

  const handleTrackOrder = () => {
    const order = orders.find(o => o.id === trackingId);
    if (order) {
      setSelectedOrder(order);
    } else {
      alert("Order not found. Please check the order ID.");
    }
  };

  const selectOrder = (order) => {
    setSelectedOrder(order);
    setTrackingId(order.id);
  };

  const handleCancelOrder = (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      cancelOrder(orderId);
      // Update the selected order if it's the one being cancelled
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder({...selectedOrder, status: 'Cancelled'});
      }
    }
  };

  const renderTrackingSteps = (order) => {
    const steps = [
      { name: 'Order Placed', icon: <CheckCircle size={24} />, date: order.date },
      { name: 'Processing', icon: <Circle size={24} />, date: order.date }, // Using order.date as fallback
      { name: 'Shipped', icon: <Package size={24} />, date: null },
      { name: 'Out for Delivery', icon: <Truck size={24} />, date: null },
      { name: 'Delivered', icon: <Home size={24} />, date: null }
    ];

    let currentStep = 0;
    if (order.status === 'Processing') currentStep = 1;
    if (order.status === 'Shipped') currentStep = 2;
    if (order.status === 'Out for Delivery') currentStep = 3;
    if (order.status === 'Delivered') currentStep = 4;
    if (order.status === 'Cancelled') return renderCancelledOrder(order);

    return (
      <div className="mt-8">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-7 top-0 w-0.5 h-full bg-gray-200"></div>
          
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`z-10 flex-shrink-0 ${
                  index <= currentStep 
                    ? 'text-blue-600' 
                    : 'text-gray-400'
                }`}>
                  {step.icon}
                </div>
                
                <div className="ml-4">
                  <p className={`font-medium ${
                    index <= currentStep 
                      ? 'text-blue-600' 
                      : 'text-gray-500'
                  }`}>
                    {step.name}
                  </p>
                  
                  {index <= currentStep && step.date && (
                    <p className="text-sm text-gray-500">
                      {new Date(step.date).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cancel Order Button */}
        {currentStep < 3 && (
          <div className="mt-8 border-t pt-6">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => handleCancelOrder(order.id)}
            >
              Cancel Order
            </button>
            <p className="mt-2 text-sm text-gray-500">
              * You can cancel your order until it's out for delivery
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderCancelledOrder = (order) => {
    return (
      <div className="mt-8 p-6 border rounded-lg bg-red-50">
        <div className="flex items-center mb-4">
          <AlertTriangle size={24} className="text-red-600 mr-2" />
          <h3 className="text-lg font-medium text-red-600">Order Cancelled</h3>
        </div>
        <p>This order was cancelled on {new Date().toLocaleDateString()}.</p>
        <p className="mt-2">Reason: Customer requested cancellation</p>
        
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h4 className="font-medium">Refund Information</h4>
          <p>Refund Status: Processing</p>
          <p>Amount: ${order.totalAmount.toFixed(2)}</p>
          <p>Expected processing time: 5-7 business days</p>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">Please Sign In</h3>
        <p className="text-gray-600 mb-6">You need to be signed in to track your orders.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Order Tracking</h2>
      
      {/* Order Tracking Form */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium mb-4">Track Your Order</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter order ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleTrackOrder}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Track
          </button>
        </div>
      </div>
      
      {/* Active Orders */}
      {activeOrders.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Your Active Orders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeOrders.map(order => (
              <div 
                key={order.id}
                className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 ${
                  selectedOrder?.id === order.id ? 'border-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => selectOrder(order)}
              >
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                <div className="flex items-center mt-2">
                  {order.status === 'Processing' && <Circle size={16} className="text-orange-500 mr-2" />}
                  {order.status === 'Shipped' && <Package size={16} className="text-blue-500 mr-2" />}
                  {order.status === 'Out for Delivery' && <Truck size={16} className="text-purple-500 mr-2" />}
                  <span>{order.status}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Expected delivery: {new Date(order.expectedDelivery).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Selected Order Tracking */}
      {selectedOrder && renderTrackingSteps(selectedOrder)}
      
      {/* No Active Orders */}
      {activeOrders.length === 0 && !selectedOrder && (
        <div className="text-center py-12">
          <img 
            src="/api/placeholder/200/200" 
            alt="No active orders" 
            className="mx-auto mb-4" 
          />
          <h3 className="text-xl font-semibold mb-2">No Active Orders</h3>
          <p className="text-gray-600">You don't have any orders currently being processed or shipped.</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;