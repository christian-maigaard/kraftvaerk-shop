import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomerOrderDetails } from "../../components/CustomerOrderDetails";
import { OrderSummary } from "../../components/OrderSummary";
import { useBasket } from "../../context/BasketProvider";
import { OrderDetails } from "../../models/OrderDetails";
import { Order } from "./../../models/Order.d";
import { PlaceOrder } from "../../api/Order";

export const Checkout: React.FC = () => {
  const basket = useBasket();
  const [validated, setValidated] = useState(false);

  const finishOrder = (event: any, orderDetails: OrderDetails) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    console.log("placing order with : " + orderDetails);
    const order: Order = {
      products: basket,
      orderDetails: orderDetails,
    };
    const res = PlaceOrder(order);
    console.log("placed order ");
    console.log(res);
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <CustomerOrderDetails validated={validated} handleSubmit={finishOrder} />
      </Col>
      <Col xs={12} md={6}>
        <OrderSummary
          products={basket}
          buttonText="Place Order"
          buttonDisabled={false}
          displayButton={true}
          displayProductOverview={true}
          onButtonClick={() => {}}
        />
      </Col>
    </Row>
  );
};
