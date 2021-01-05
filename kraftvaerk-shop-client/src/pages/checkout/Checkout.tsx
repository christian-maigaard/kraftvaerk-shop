import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomerOrderDetails } from "../../components/CustomerOrderDetails";
import { OrderSummary } from "../../components/OrderSummary";
import { useBasket } from "../../context/BasketProvider";
import { OrderDetails } from "../../models/OrderDetails";
import { Order } from "./../../models/Order.d";
import { useHistory } from "react-router-dom";
import { useOrderUpdate } from "../../context/OrderProvider";

export const Checkout: React.FC = () => {
  const basketProducts = useBasket();
  const history = useHistory();
  const updateOrder = useOrderUpdate();

  const [validated, setValidated] = useState(false);

  const finishOrder = (event: any, orderDetails: OrderDetails) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) return;
    setValidated(true);

    console.log("placing order with : " + orderDetails);
    const order: Order = {
      orderProducts: basketProducts,
      orderDetails: orderDetails,
    };
    updateOrder(order);
    history.push("/checkout/confirmation");
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <CustomerOrderDetails validated={validated} handleSubmit={finishOrder} />
      </Col>
      <Col xs={12} md={6}>
        <OrderSummary products={basketProducts} displayProductOverview={true} />
      </Col>
    </Row>
  );
};
