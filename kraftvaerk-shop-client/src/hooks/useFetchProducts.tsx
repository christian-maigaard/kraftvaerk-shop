import { useEffect, useState } from "react";
import { Product } from "./../models/Product.d";
import * as Endpoints from "../constants/Endpoints";
export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(Endpoints.BASE_URL + "/api/products")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return { products, isLoading, error };
};
