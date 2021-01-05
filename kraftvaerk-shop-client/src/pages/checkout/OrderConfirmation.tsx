import React from "react";
import { usePlaceOrder } from "./../../hooks/usePlaceOrder";
import { CenteredSpinner } from "../../components/CenteredSpinner";
import { Error } from "../Error";
import { useOrder } from "./../../context/OrderProvider";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CenterWrapper } from "../../components/wrappers/CenterWrapper";
import { OrderSummary } from "../../components/OrderSummary";

export const OrderConfirmation: React.FC = () => {
  const order = useOrder();
  const { confirmedOrder, isLoading, error } = usePlaceOrder(order);
  return (
    <>
      {isLoading && <CenteredSpinner />}
      {error && (
        <Error
          title="Oops! An error occoured while creating the order"
          message="Please try placing the order again or contact our customer service"
        />
      )}
      {confirmedOrder && !error && (
        <CenterWrapper>
          <Container>
            <h1>Thank you! We've received your order</h1>
            <h4>Order no# {confirmedOrder.orderId}</h4>
            <p className="lead text-muted">
              A copy of your receipt has been sent to {confirmedOrder.orderDetails.email}
            </p>
            <hr />
            <OrderSummary products={confirmedOrder.orderProducts} displayProductOverview={true} />
            <br />
            <Button as={Link} to="/" variant="primary" size="lg" active>
              Go to frontpage
            </Button>
          </Container>
        </CenterWrapper>
      )}
    </>
  );
};
