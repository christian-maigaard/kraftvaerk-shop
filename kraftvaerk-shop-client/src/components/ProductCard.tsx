import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product } from "./../models/Product.d";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.mediaUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <b>{product.price}</b> €
          </Card.Text>
          <Button variant="primary">Add to basket</Button>{" "}
          <Button as={Link} to={`/products/${product.id}`} variant="secondary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
