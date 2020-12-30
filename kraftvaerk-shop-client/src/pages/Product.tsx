import React from "react";
import { useFetchProduct } from "./../hooks/useFetchProduct";

interface ProductProps {
  productId: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const { product, isLoading, error } = useFetchProduct({ productId: productId });
  return <p>{product?.name}</p>;
};
