import { OrderDetails } from "./OrderDetails.d";
import { Product } from "./../pages/Product";

export interface Order {
  orderId?: number;
  orderProducts: Product[];
  orderDetails: OrderDetails;
}
