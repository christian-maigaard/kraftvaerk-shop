import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <Jumbotron className="jumbotron text-center">
      <h1>Sorry, we cannot find the information you are looking for.</h1>
      <p className="lead text-muted">
        You are always welcome to contact us, if the information you are looking for is not on the
        site. The menu gives you an overview of the content available on the site.
      </p>
      <p>
        <Button as={Link} to="/" variant="primary" size="lg" active>
          Go home
        </Button>
      </p>
    </Jumbotron>
  );
};
