import React, { useState, useEffect } from "react";
import { ProductCard } from "./../components/ProductCard";
import { Product } from "./../models/Product.d";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:44387/api/products")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {!isLoading && products.length === 0 && (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h1>No products found</h1>
        </div>
      )}

      <Container>
        <CardDeck>
          <div className="d-flex flex-wrap">
            {products.map((product, index) => (
              <ProductCard key={product.name + index} product={product} />
            ))}
          </div>
        </CardDeck>
      </Container>
    </>
  );
};
