import React, { useState, useContext } from "react";

import { createContext } from "react";
import { Product } from "../models/Product";

export const BasketContext = createContext<Product[]>([]);

export const BasketUpdateContext = createContext<(product: Product) => void>(() => {
  return;
});

export const useBasket = () => {
  return useContext(BasketContext);
};

export const useBasketUpdate = () => {
  return useContext(BasketUpdateContext);
};

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<Product[]>([]);

  const updateBasket = (product: Product) => {
    const basketCopy = [...basket];
    basketCopy.push(product);
    setBasket(basketCopy);
  };

  return (
    <BasketContext.Provider value={basket}>
      <BasketUpdateContext.Provider value={updateBasket}>{children}</BasketUpdateContext.Provider>
    </BasketContext.Provider>
  );
};
