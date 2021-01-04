import { useEffect, useState } from "react";
import * as Endpoints from "../constants/Endpoints";
import { Order } from "./../models/Order.d";

export const usePlaceOrder = (order: Order) => {
  const [orderPlaced, setOrderPlaced] = useState<Order>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(Endpoints.BASE_URL + "/api/order", { method: "POST", body: JSON.stringify(order) })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .then((data) => {
        setIsLoading(false);
        setOrderPlaced(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [order]);

  return { orderPlaced, isLoading, error };
};
