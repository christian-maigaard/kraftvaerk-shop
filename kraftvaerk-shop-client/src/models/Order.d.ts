import { OrderDetails } from "./OrderDetails.d";
import { OrderProduct } from "./OrderProduct.d";

export interface Order {
  orderId?: number;
  orderProducts: OrderProduct[];
  orderDetails: OrderDetails;
}
