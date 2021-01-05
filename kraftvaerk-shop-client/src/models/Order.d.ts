import { Product } from "./Product.d";
import { OrderDetails } from "./OrderDetails.d";

export interface Order {
  orderId?: number
  orderProducts: Product[];
  orderDetails: OrderDetails;
}
