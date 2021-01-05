import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { OrderDetails } from "./../models/OrderDetails.d";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOrderUpdate } from "../context/OrderProvider";
import { useBasket } from "../context/BasketProvider";

enum FormId {
  email = "email",
  firstname = "firstname",
  lastname = "lastname",
  company = "company",
  address = "address",
  country = "country",
  city = "city",
  zip = "zip",
  telephone = "telephone",
}

const formIds: string[] = [
  FormId.email,
  FormId.firstname,
  FormId.lastname,
  FormId.company,
  FormId.address,
  FormId.country,
  FormId.city,
  FormId.zip,
  FormId.telephone,
];

export const CustomerOrderDetails: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const basketProducts = useBasket();
  const history = useHistory();
  const updateOrder = useOrderUpdate();

  const handleOrderSubmit = (event: any) => {
    const form = event.currentTarget;
    const customerDetailsValid = form.checkValidity();

    if (!customerDetailsValid) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (customerDetailsValid) {
      updateOrder({
        orderProducts: basketProducts,
        orderDetails: getCustomerOrderDetails(form.elements),
      });
      history.push("/checkout/confirmation");
    }
  };

  const getCustomerOrderDetails = (formElements: any): OrderDetails => {
    let customerOrderDetails: OrderDetails = {};
    formIds.forEach(
      (formId: string) => (customerOrderDetails[formId] = formElements[formId].value)
    );
    return customerOrderDetails;
  };

  return (
    <Card>
      <Card.Header as="h4">Order details</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleOrderSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="firstname">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="company">
            <Form.Label>Company(optional)</Form.Label>
            <Form.Control placeholder="Company(optional)" />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control required type="text" placeholder="Country" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required type="text" placeholder="Zip" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="telephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control required type="text" placeholder="Telephone" />
          </Form.Group>

          <Row>
            <Col>
              <Button as={Link} to={"/products/"} variant="link" block>
                Continue shopping
              </Button>
            </Col>
            <Col>
              <Button type="submit" variant="primary" block>
                Place Order
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
