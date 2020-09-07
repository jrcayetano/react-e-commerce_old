import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ShoppingCart from "../ShoppingCart";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">REACT APP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <ShoppingCart />
    </Navbar>
  );
};
export default Header;
