import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useFetchProduct } from "./../hooks/useFetchProduct";
import Image from "react-bootstrap/Image";
import { NotFound } from "./NotFound";
import { CenteredSpinner } from "../components/CenteredSpinner";
import { useBasket, useBasketUpdate } from "../context/BasketProvider";
interface ProductProps {
  productId: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const { product, isLoading, error } = useFetchProduct({ productId: productId });
  //const { basket, setBasket } = useContext<any>(BasketContext);
  const basket = useBasket();
  const updateBasket = useBasketUpdate();
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
              {JSON.stringify(basket, null, 2)}
              <p>{product?.description}</p>

              <div className="bottom-actions">
                <div className="text-right">
                  <span>Price</span>
                  <h2>{product?.price} €</h2>
                </div>

                <Button variant="primary" block onClick={() => updateBasket([product])}>
                  Add to basket
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
