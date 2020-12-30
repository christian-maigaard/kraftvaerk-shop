import React from "react";
import { ProductCard } from "./../components/ProductCard";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "react-bootstrap/Spinner";
import { CenterWrapper } from "../components/wrappers/CenterWrapper";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const Products: React.FC = () => {
  const { products, isLoading, error } = useFetchProducts();
  const shouldDisplayInformation = isLoading || (!isLoading && products.length === 0) || error;

  const getDisplayInformation = () => {
    if (isLoading) return <Spinner animation="border" variant="primary" />;
    if (!isLoading && products.length === 0) return <h1>No products found</h1>;
    if (error) return <h1>An error occoured when fetching the products from the server</h1>;
  };

  return (
    <>
      {shouldDisplayInformation && <CenterWrapper>{getDisplayInformation()}</CenterWrapper>}
      <Container>
        <CardColumns>
          {products.map((product, index) => (
            <ProductCard key={product.name + index} product={product} />
          ))}
        </CardColumns>
      </Container>
    </>
  );
};
