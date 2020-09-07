import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useDispatch } from "react-redux";
import { toggleShoppingCartList } from "./../../../state/actions/shoppingActionTypes";

const ShoppingCart = ({ shoppingcart }) => {
  const dispatch = useDispatch();
  const handleShoppingCarr = () => {
    console.log("click");
    dispatch(toggleShoppingCartList());
  };
  return (
    <Button onClick={handleShoppingCarr}>
      <FontAwesomeIcon icon={faShoppingCart} />{" "}
      <Badge variant="light">{shoppingcart.length}</Badge>
      <span className="sr-only">cart</span>
    </Button>
  );
};
// Map Redux state to React component props
const mapStateToProps = (state) => ({
  shoppingcart: state.products.shoppingcart,
});

// Connect Redux to React
export default connect(mapStateToProps)(ShoppingCart);
// export default Header;
