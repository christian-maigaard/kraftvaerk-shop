import React, { useState, useEffect } from "react";
import { ProductCard } from "./../components/ProductCard";
import { Product } from "./../models/Product.d";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const shouldDisplayInformation = isLoading || (!isLoading && products.length === 0) || error;

  const getDisplayInformation = () => {
    if (isLoading) return <Spinner animation="border" variant="primary" />;
    if (!isLoading && products.length === 0) return <h1>No products found</h1>;
    if (error) return <h1>An error occoured when fetching the products from the server</h1>;
  };

  useEffect(() => {
    fetch("https://localhost:44387/api/products")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <>
      {shouldDisplayInformation && (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          {getDisplayInformation()}
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
