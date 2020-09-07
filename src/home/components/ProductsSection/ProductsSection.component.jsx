import React, { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import http from "axios";
import { connect, useDispatch } from "react-redux";
import classNames from "classnames";

const ProductsSection = ({ showShoppingList }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    http
      .get("http://localhost:3001/products")
      .then((response) => setProducts([...response.data]));
    console.log("ProductsSection mounted");
  }, []);
  return (
    <div
      className={classNames({
        productSection: true,
        "active-shopping-list": showShoppingList,
      })}
    >
      <div
        className={classNames({
          "product-list": true,
          "active-shopping-list": showShoppingList,
        })}
      >
        {products.map((product, index) => (
          <Product product={product} key={`P_${index}`} />
        ))}
      </div>
      {showShoppingList && <div className="shoppinglist active">aaaa</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  showShoppingList: state.products.showCartList,
});

export default connect(mapStateToProps)(ProductsSection);
