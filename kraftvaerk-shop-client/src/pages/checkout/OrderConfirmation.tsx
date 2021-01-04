import React from "react";
import { Order } from "./../../models/Order.d";

interface OrderConfirmationProps {
  order: Order;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ order }) => {
  return <pre>{order}</pre>;
};
