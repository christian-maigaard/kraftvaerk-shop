import React from "react";
import { ProductCard } from "./../components/ProductCard";
import CardColumns from "react-bootstrap/CardColumns";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Error } from "./Error";
import { CenteredSpinner } from "./../components/CenteredSpinner";

export const Products: React.FC = () => {
  const { products, isLoading, error } = useFetchProducts();

  return (
    <>
      {isLoading && <CenteredSpinner />}
      {error && (
        <Error
          title="Oops! An error occoured while fetching products"
          message="Please try again later"
        />
      )}
      {products && !error && (
        <CardColumns>
          {products.map((product, index) => (
            <ProductCard key={product.name + index} product={product} />
          ))}
        </CardColumns>
      )}
    </>
  );
};
