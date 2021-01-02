import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { OrderDetails } from "./../models/OrderDetails.d";

interface CustomerOrderDetailsProps {
  validated: boolean;
  handleSubmit: (event: any, orderDetails: OrderDetails) => void;
}

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

export const CustomerOrderDetails: React.FC<CustomerOrderDetailsProps> = ({
  validated,
  handleSubmit,
}) => {
  const onFormSubmit = (event: any) => {
    const formElements = event.currentTarget.elements;
    const customerOrderDetails = getCustomerOrderDetails(formElements);
    handleSubmit(event, customerOrderDetails);
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
        <Form noValidate validated={validated} onSubmit={onFormSubmit}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
