import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Product } from "./../models/Product.d";

interface BasketCardProps {
  products: Product[];
}

export const BasketCard: React.FC<BasketCardProps> = ({ products }) => {
  return (
    <Card>
      <Card.Header as="h4">Basket</Card.Header>
      <Card.Body>
        {products.length === 0 && <Card.Text>Your basket is empty</Card.Text>}
        {products.map((product, index) => (
          <div key={product.id}>
            <Row>
              <Col xs={2}>
                <Image src={product?.mediaUrl} fluid />
              </Col>
              <Col xs={10}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price} €</Card.Text>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};
