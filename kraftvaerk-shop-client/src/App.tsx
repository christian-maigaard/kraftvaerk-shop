import React from "react";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./components/AppRouter";
import { BasketProvider } from "./context/BasketProvider";
import Container from "react-bootstrap/Container";
import { OrderProvider } from "./context/OrderProvider";
import "./style/app.css";

export const App = () => {
  return (
    <BasketProvider>
      <OrderProvider>
        <Navigation />
        <Container fluid>
          <div className="vh-100 p-3">
            <AppRouter />
          </div>
        </Container>
      </OrderProvider>
    </BasketProvider>
  );
};
