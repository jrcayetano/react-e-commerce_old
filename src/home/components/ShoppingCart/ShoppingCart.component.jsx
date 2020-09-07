import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'

const ShoppingCart = ({shoppingcart}) => {
  return (
    <Button>
      <FontAwesomeIcon icon={faShoppingCart} />{" "}
      <Badge variant="light">{shoppingcart.length}</Badge>
      <span className="sr-only">cart</span>
    </Button>
  );
};
// Map Redux state to React component props
const mapStateToProps = (state) => ({
  shoppingcart: state.products.shoppingcart,
})

// Connect Redux to React
export default connect(mapStateToProps)(ShoppingCart)
// export default Header;
