import React from "react";
import { useBasket } from "../context/BasketProvider";
import { BasketCard } from "../components/BasketCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderSummary } from "../components/OrderSummary";
import { useHistory } from "react-router-dom";

export const Basket: React.FC = () => {
  const basket = useBasket();

  const history = useHistory();

  const goToCheckout = (event: React.MouseEvent<HTMLInputElement>) => {
    history.push("/checkout");
  };

  return (
    <Row>
      <Col xs={12} md={8}>
        <BasketCard products={basket} />
      </Col>
      <Col xs={12} md={4}>
        <OrderSummary
          products={basket}
          buttonText="Go to checkout"
          buttonDisabled={basket.length <= 0}
          displayButton={true}
          displayProductOverview={false}
          onButtonClick={goToCheckout}
        />
      </Col>
    </Row>
  );
};
