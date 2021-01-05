import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomerOrderDetails } from "../../components/CustomerOrderDetails";
import { OrderSummary } from "../../components/OrderSummary";
import { useBasket } from "../../context/BasketProvider";
import { useHistory } from "react-router-dom";

export const Checkout: React.FC = () => {
  const basketProducts = useBasket();
  const history = useHistory();

  useEffect(() => {
    if (basketProducts.length === 0) history.push("/basket");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col xs={12} md={6}>
        <CustomerOrderDetails />
      </Col>
      <Col xs={12} md={6}>
        <OrderSummary products={basketProducts} displayProductOverview={true} />
      </Col>
    </Row>
  );
};
