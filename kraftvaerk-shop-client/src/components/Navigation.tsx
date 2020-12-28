import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Kraftvaerk Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/checkout">
            Checkout
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
