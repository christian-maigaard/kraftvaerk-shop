import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Product } from "./../models/Product.d";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={product.productId + index}>
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
    </>
  );
};
