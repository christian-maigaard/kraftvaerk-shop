import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">Kraftvaerk Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">Products</Nav.Link>
          <Nav.Link href="#link">Checkout</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
