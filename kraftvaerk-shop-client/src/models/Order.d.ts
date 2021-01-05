import { Product } from "./Product.d";
import { OrderDetails } from "./OrderDetails.d";

export interface Order {
  productIds: number[];
  orderDetails: OrderDetails;
}
