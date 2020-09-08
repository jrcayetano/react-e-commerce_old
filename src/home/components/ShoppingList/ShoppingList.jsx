import React, { useEffect, useState } from "react";
import ProductPreview from "./../ProductPreview";
import { connect } from "react-redux";
import Subtotal from "./../Subtotal.jsx";

const ShoppingList = ({ shoppingcart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = shoppingcart
      .map((product) => product.price * product.quantity)
      .reduce((product1, product2) => product1 + product2, 0);
    setTotal(total);
  }, [shoppingcart]);
  return (
    <div className="shoppinglist active">
      <Subtotal total={total} />
      {shoppingcart.map((product) => (
        <ProductPreview product={product} key={product.id} />
      ))}
    </div>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  shoppingcart: state.products.shoppingcart,
});

// Connect Redux to React
export default connect(mapStateToProps)(ShoppingList);
