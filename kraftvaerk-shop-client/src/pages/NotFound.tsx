import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <Container>
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
      </Container>
    </div>
  );
};
