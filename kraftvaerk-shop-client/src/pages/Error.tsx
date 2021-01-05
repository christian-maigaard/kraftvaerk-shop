import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CenterWrapper } from "../components/wrappers/CenterWrapper";

interface ErrorProps {
  title?: string;
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ title, message }) => {
  return (
    <CenterWrapper>
      <Container>
        <h1>{title}</h1>
        <p className="lead text-muted">{message}</p>
        <br />
        <Button as={Link} to="/" variant="primary" size="lg" active>
          Go to frontpage
        </Button>
      </Container>
    </CenterWrapper>
  );
};

Error.defaultProps = {
  title: "Sorry, we cannot find the information you are looking for.",
  message:
    "You are always welcome to contact us, if the information you are looking for is not on the site. The menu gives you an overview of the content available on the site.",
};
