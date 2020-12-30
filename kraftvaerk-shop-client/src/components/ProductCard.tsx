import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product } from "./../models/Product.d";
import { Link } from "react-router-dom";
import { AddToBasketButton } from "./AddToBasketButton";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.mediaUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>
          <b>{product.price}</b> €
        </Card.Text>
        <AddToBasketButton product={product} />
        <Button as={Link} to={`/products/${product.id}`} variant="secondary" block>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};
