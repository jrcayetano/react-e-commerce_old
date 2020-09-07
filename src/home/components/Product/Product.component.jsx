import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = ({ product }) => {
  console.log("product", product);
  useEffect(() => {
    console.log("Product mounted");
  }, [product]);

  return (
    <div className="product">
      <Card style={{ width: "18rem" }} className="product-item">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
