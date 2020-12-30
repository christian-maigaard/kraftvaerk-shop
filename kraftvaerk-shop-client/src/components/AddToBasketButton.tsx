import React from "react";
import Button from "react-bootstrap/Button";
import { useBasketUpdate } from "../context/BasketProvider";
import { Product } from "./../models/Product.d";

interface AddToBasketButtonProps {
  product: Product;
}

export const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({ product }) => {
  const updateBasket = useBasketUpdate();

  return (
    <Button variant="primary" block onClick={() => updateBasket(product)}>
      Add to basket
    </Button>
  );
};
