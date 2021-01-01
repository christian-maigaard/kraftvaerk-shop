import React from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Product } from "./../models/Product.d";

interface OrderSummaryProps {
  products: Product[];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ products }) => {
  var productPrices = products.map((product) => product.price);
  const subTotal = productPrices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const deliveryFee = products.length >= 5 || products.length === 0 ? 0 : 10;
  const totalPrice = subTotal + deliveryFee;
  return (
    <Card>
      <Card.Header as="h4">Your order</Card.Header>
      <Card.Body>
        <div className="d-flex  justify-content-between">
          <Card.Text>Subtotal</Card.Text>
          {subTotal}
        </div>
        <div className="d-flex  justify-content-between">
          <Card.Text> Delivery fee</Card.Text>
          {deliveryFee}
        </div>

        <hr />
        <div className="d-flex  justify-content-between">
          <b>Total price(incl. VAT)</b>
          <b>{totalPrice} €</b>
        </div>
        <hr />

        <Button variant="primary" block>
          Go to checkout
        </Button>
      </Card.Body>
    </Card>
  );
};
