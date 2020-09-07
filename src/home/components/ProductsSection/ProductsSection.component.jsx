import React, { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import http from "axios";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    http
      .get("http://localhost:3001/products")
      .then((response) => setProducts([...response.data]));
    console.log("ProductsSection mounted");
  }, []);
  return (
    <div className="productSection">
      
      <div className="product-list">
        {products.map((product, index) => (
          <Product product={product} key={`P_${index}`} />
        ))}
      </div>
      <div class="shoppinglist">aaaa</div>
    </div>
  );
};
export default ProductsSection;
