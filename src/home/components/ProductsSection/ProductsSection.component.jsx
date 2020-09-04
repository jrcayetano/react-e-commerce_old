import React, { useEffect } from "react";
import Product from "../Product/Product.component";

const products = [
  {
    name: "",
    description: "",
    image: "https://picsum.photos/200/300?random=1",
    price: "",
  },
  {
    name: "",
    description: "",
    image: "https://picsum.photos/200/300?random=2",
    price: "",
  },
  {
    name: "",
    description: "",
    image: "https://picsum.photos/200/300?random=3",
    price: "",
  },
  {
    name: "",
    description: "",
    image: "https://picsum.photos/200/300?random=4",
    price: "",
  },
  {
    name: "",
    description: "https://picsum.photos/200/300?random=5",
    image: "",
    price: "",
  },
  {
    name: "",
    description: "https://picsum.photos/200/300?random=6",
    image: "",
    price: "",
  },
];

const ProductsSection = () => {
  useEffect(() => {
    console.log("ProductsSection mounted");
  }, []);
  return (
    <div className="productSection">
      <h1>Product section</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Product product={product} key={`P_${index}`} />
        ))}
      </div>
    </div>
  );
};
export default ProductsSection;
