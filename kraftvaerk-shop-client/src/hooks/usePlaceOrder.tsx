import { useEffect, useState } from "react";
import * as Endpoints from "../constants/Endpoints";
import { formatResponse } from "../util/FetchHelper";
import { Order } from "./../models/Order.d";
import { useBasketClear } from "../context/BasketProvider";
export const usePlaceOrder = (order: Order | null) => {
  const [confirmedOrder, setConfirmedOrder] = useState<Order>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const clearBasket = useBasketClear();

  useEffect(() => {
    fetch(Endpoints.BASE_URL + "/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => formatResponse(res))
      .then((data) => {
        setIsLoading(false);
        setConfirmedOrder(data);
        clearBasket();
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  return { confirmedOrder, isLoading, error };
};
