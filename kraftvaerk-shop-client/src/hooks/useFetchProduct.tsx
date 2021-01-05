import { useEffect, useState } from "react";
import { Product } from "./../models/Product.d";
import * as Endpoints from "../constants/Endpoints";
import { formatResponse } from "./../util/FetchHelper";

interface useFetchProductProps {
  productId: string;
}

export const useFetchProduct = ({ productId }: useFetchProductProps) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(Endpoints.BASE_URL + "/api/products/" + productId)
      .then((res) => formatResponse(res))
      .then((data) => {
        setIsLoading(false);
        setProduct(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [productId]);

  return {
    product,
    isLoading,
    error,
  };
};
