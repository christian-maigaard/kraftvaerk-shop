import React from "react";
import { useBasket } from "../context/BasketProvider";
import { BasketCard } from "../components/BasketCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderSummary } from "../components/OrderSummary";

export const Basket: React.FC = () => {
  const basket = useBasket();

  return (
    <Row>
      <Col xs={12} md={8}>
        <BasketCard products={basket} />
      </Col>
      <Col xs={12} md={4}>
        <OrderSummary products={basket} />
      </Col>
    </Row>
  );
};
