import { Product } from "./Product.d";
import { OrderDetails } from "./OrderDetails.d";

export interface Order {
  products: Product[];
  orderDetails: OrderDetails;
}
