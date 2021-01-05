import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product } from "./../models/Product.d";
import { ProductList } from "./ProductList";
import { OrderDetails } from "./../models/OrderDetails.d";

interface OrderSummaryProps {
  products: Product[];
  buttonText?: string;
  displayButton?: boolean;
  buttonDisabled?: boolean;
  displayProductOverview?: boolean;
  onButtonClick?: (event: any, orderDetails?: OrderDetails) => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  products,
  buttonText,
  displayButton,
  buttonDisabled,
  displayProductOverview,
  onButtonClick,
}) => {
  const productPrices = products.map((product) => product.price);
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
        {displayProductOverview && products.length === 0 && (
          <Card.Text>Your basket is empty</Card.Text>
        )}

        {displayProductOverview && <ProductList products={products} />}

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

        {displayButton && (
          <Button disabled={buttonDisabled} variant="primary" block onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

OrderSummary.defaultProps = {
  buttonDisabled: false,
  displayButton: false,
  displayProductOverview: false,
  onButtonClick: () => {},
};
