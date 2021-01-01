import { Product } from "./Product.d";
import { OrderDetails } from "./OrderDetails.d";

export interface Order {
  id: string;
  products: Product[];
  subTotal: number;
  deliveryFee: number;
  totalPrice: number;
  orderDetails: OrderDetails;
}
