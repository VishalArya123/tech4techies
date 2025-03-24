import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

const OrdersContext = createContext(null);

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useAuth();
  const { cartItems, clearCart, getCartTotal } = useCart();

  // Load orders from localStorage on mount and when user changes
  useEffect(() => {
    if (currentUser) {
      const savedOrders = localStorage.getItem(`orders_${currentUser.id}`);
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        setOrders([]);
      }
    } else {
      setOrders([]);
    }
  }, [currentUser]);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`orders_${currentUser.id}`, JSON.stringify(orders));
    }
  }, [orders, currentUser]);

  // Create a new order
  const createOrder = () => {
    if (!currentUser || cartItems.length === 0) {
      return { success: false, message: "Unable to create order" };
    }

    const newOrder = {
      id: `order-${Date.now()}`,
      userId: currentUser.id,
      items: [...cartItems],
      total: getCartTotal(),
      status: "Processing",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    clearCart();

    return { success: true, order: newOrder };
  };

  // Cancel an order
  const cancelOrder = (orderId) => {
    const orderToCancel = orders.find(order => order.id === orderId);
    
    if (!orderToCancel) {
      return { success: false, message: "Order not found" };
    }
    
    if (orderToCancel.status !== "Processing") {
      return { success: false, message: "Only orders in 'Processing' status can be cancelled" };
    }
    
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: "Cancelled", updatedAt: new Date().toISOString() } 
          : order
      )
    );
    
    return { success: true, message: "Order cancelled successfully" };
  };

  // Get order by id
  const getOrder = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const value = {
    orders,
    createOrder,
    cancelOrder,
    getOrder
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};

export default OrdersContext;