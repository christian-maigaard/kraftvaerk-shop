import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFetchProduct } from "./../hooks/useFetchProduct";
import Image from "react-bootstrap/Image";
import { Error } from "./Error";
import { CenteredSpinner } from "../components/CenteredSpinner";
import { AddToBasketButton } from "../components/AddToBasketButton";
interface ProductProps {
  productId: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const { product, isLoading, error } = useFetchProduct({ productId: productId });
  return (
    <>
      {isLoading && <CenteredSpinner />}
      {error && <Error />}
      {product && !error && (
        <Row>
          <Col xs={12} md={6}>
            <Image src={product?.mediaUrl} fluid />
          </Col>
          <Col xs={12} md={6}>
            <h1>{product?.name}</h1>
            <small className="text-muted">Product id: {product?.productId}</small>
            <hr />
            <p>{product?.description}</p>

            <div className="bottom-actions">
              <div className="text-right">
                <span>Price</span>
                <h2>{product?.price} €</h2>
              </div>
              <AddToBasketButton product={product}></AddToBasketButton>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
