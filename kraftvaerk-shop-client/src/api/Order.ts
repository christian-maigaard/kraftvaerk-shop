import { Order } from "./../models/Order.d";
import * as Endpoints from "../constants/Endpoints";

export const PlaceOrder = (order: Order) => {
  fetch(Endpoints.BASE_URL + "/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
    .then((data) => data)
    .catch((error) => error);
};
