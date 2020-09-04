import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [product] = useState("");
  console.log("product", product);
  useEffect(() => {
    console.log("Product mounted");
  }, [product]);

  return (
    <div className="product">
      <Card style={{ width: "18rem" }} className="product-item">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
