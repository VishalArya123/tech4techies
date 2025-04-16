import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const OrdersContext = createContext();

export function useOrders() {
  return useContext(OrdersContext);
}

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  // Load orders from localStorage on component mount
  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.sub;
      const savedOrders = localStorage.getItem(`orders_${userId}`);
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    } else {
      setOrders([]);
    }
  }, [isAuthenticated, user]);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.sub;
      localStorage.setItem(`orders_${userId}`, JSON.stringify(orders));
    }
  }, [orders, isAuthenticated, user]);

  const placeOrder = (products, totalAmount) => {
    if (!isAuthenticated) {
      alert("Please sign in to place an order");
      return false;
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      products: [...products],
      totalAmount,
      status: 'Processing',
      date: new Date().toISOString(),
      expectedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return true;
  };

  const cancelOrder = (orderId) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  const value = {
    orders,
    placeOrder,
    cancelOrder
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
}