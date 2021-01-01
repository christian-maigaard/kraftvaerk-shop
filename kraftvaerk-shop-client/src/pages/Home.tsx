import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <Jumbotron className="jumbotron text-center" fluid>
      <h1>Welcome to Kraftvaerk Shop</h1>
      <p className="lead text-muted"> We have been developing the future since 2004</p>
      <p>
        <Button as={Link} to="/products" variant="primary" size="lg">
          Shop now
        </Button>{" "}
        <Button as={Link} to="/about" variant="secondary" size="lg">
          About us
        </Button>
      </p>
    </Jumbotron>
  );
};
