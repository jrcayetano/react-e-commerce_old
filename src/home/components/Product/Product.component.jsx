import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductShoppingCart,
  incrementProductShoppingCart,
} from "./../../../state/actions/shoppingActionTypes";

const Product = ({ product }) => {
  const productFoundInList = useSelector((state) =>
    state.products.shoppingcart.find((p) => p.id === product.id)
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [product]);

  const addItemToShoppingCart = () => {
    console.log("aaaa", productFoundInList);
    !productFoundInList
      ? dispatch(addProductShoppingCart({ ...product, quantity: 1 }))
      : dispatch(incrementProductShoppingCart(product.id));
    /*   console.log('aaa',productFoundInList )
    if (!productFoundInList) {
      dispatch(addProductShoppingCart(product));
    }
    dispatch(incrementProductShoppingCart(product)); */
  };

  return (
    <div className="product">
      <Card style={{ width: "18rem" }} className="product-item">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={addItemToShoppingCart}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
