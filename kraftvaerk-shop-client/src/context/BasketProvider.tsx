import React, { useState, useContext } from "react";

import { createContext } from "react";
import { Product } from "../models/Product";

// export const BasketContext = createContext<{
//   basket: Product[];
//   setBasket: React.Dispatch<React.SetStateAction<Product[]>>;
// } | null>(null);

export const BasketContext = createContext<Product[]>([]);

export const BasketUpdateContext = createContext<React.Dispatch<React.SetStateAction<Product[]>>>(
  () => console.log("empty")
);

export const useBasket = () => {
  return useContext(BasketContext);
};

export const useBasketUpdate = () => {
  return useContext(BasketUpdateContext);
};

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<Product[]>([]);
  // const providerValue = useMemo(() => ({ basket, setBasket }), [basket, setBasket]);

  return (
    <BasketContext.Provider value={basket}>
      <BasketUpdateContext.Provider value={setBasket}>{children}</BasketUpdateContext.Provider>
    </BasketContext.Provider>
  );
};
