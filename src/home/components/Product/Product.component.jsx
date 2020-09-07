import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProductShoppingCart } from "./../../../state/actions/shoppingActionTypes";

const Product = ({ product }) => {
  console.log("product", product);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Product mounted");
  }, [product]);

  /* const addItemToShoppingCart = (e, product) => {
    e.preventDefault();
    dispatch(addProductShoppingCart(product));
  } */

  return (
    <div className="product">
      <Card style={{ width: "18rem" }} className="product-item">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            variant="primary"
            onClick={(e) => dispatch(addProductShoppingCart(product))}
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
