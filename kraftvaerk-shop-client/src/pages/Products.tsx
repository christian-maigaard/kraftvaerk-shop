import React from "react";
import { ProductCard } from "./../components/ProductCard";
import CardColumns from "react-bootstrap/CardColumns";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { NotFound } from "./NotFound";
import { CenteredSpinner } from "./../components/CenteredSpinner";

export const Products: React.FC = () => {
  const { products, isLoading, error } = useFetchProducts();

  return (
    <>
      {isLoading && <CenteredSpinner />}
      {error && <NotFound />}
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
