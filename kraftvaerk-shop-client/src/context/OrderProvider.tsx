import React, { useState, useContext } from "react";

import { createContext } from "react";
import { Order } from "./../models/Order.d";

export const OrderContext = createContext<Order | null>(null);

export const OrderUpdateContext = createContext<(order: Order) => void>(() => {
  return;
});

export const useOrder = () => {
  return useContext(OrderContext);
};

export const useOrderUpdate = () => {
  return useContext(OrderUpdateContext);
};

export const OrderProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(null);

  const updateOrder = (order: Order) => {
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={updateOrder}>{children}</OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
};
