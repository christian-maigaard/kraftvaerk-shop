import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFetchProduct } from "./../hooks/useFetchProduct";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import { BlockButton } from "../components/BlockButton";
import { NotFound } from "./NotFound";
import { CenteredSpinner } from "../components/CenteredSpinner";
interface ProductProps {
  productId: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const { product, isLoading, error } = useFetchProduct({ productId: productId });
  return (
    <>
      {isLoading && <CenteredSpinner />}
      {error && <NotFound />}
      {product && !error && (
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image src={product?.mediaUrl} fluid />
            </Col>
            <Col xs={12} md={6}>
              <h1>{product?.name}</h1>
              <small className="text-muted">Product id: {product?.id}</small>
              <hr />

              <p>{product?.description}</p>

              <div className="bottom-actions">
                <div className="text-right">
                  <span>Price</span>
                  <h2>{product?.price} €</h2>
                </div>
                <BlockButton text="Add to basket" />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
