import React from "react";
import { useBasket, useBasketUpdate } from "../context/BasketProvider";

export const Checkout: React.FC = () => {
  const basket = useBasket();

  return <pre> {JSON.stringify(basket, null, 2)}</pre>;
};
