import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ShoppingCart from "../ShoppingCart";
import LoginButton from "../LoginButton";
import { HOME_PATH } from "../../../const/Path.const";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href={HOME_PATH}>REACT APP</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={HOME_PATH}>Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <LoginButton />
      <ShoppingCart />
    </Navbar>
  );
};
export default Header;
