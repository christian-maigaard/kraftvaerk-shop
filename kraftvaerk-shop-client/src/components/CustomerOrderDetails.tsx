import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

interface CustomerOrderDetailsProps {
  validated: boolean;
  handleSubmit: (event: any) => void;
}

export const CustomerOrderDetails: React.FC<CustomerOrderDetailsProps> = ({
  validated,
  handleSubmit,
}) => {
  return (
    <Card>
      <Card.Header>Order details</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="validationFirstname">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="validationLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="validationCompany">
            <Form.Label>Company(optional)</Form.Label>
            <Form.Control placeholder="Company(optional)" />
          </Form.Group>

          <Form.Group controlId="validationAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group controlId="validationContry">
            <Form.Label>Country</Form.Label>
            <Form.Control required type="text" placeholder="Country" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCity">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="validationZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required type="text" placeholder="Zip" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="validationTelephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control required type="text" placeholder="Telephone" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};
