import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import { deleteProductShoppingCart } from "./../../../state/actions/shoppingActionTypes";

const ProductPreview = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteProductShoppingCart(product.id));
  };

  return (
    <Fragment>
      <div
        className={classNames({
          "product-preview": true,
          "active-hover": isHover,
        })}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img className="product-preview__image" src={product.image}></img>
        <div className="product-preview__product-info">
          <span className="product-preview__product-info__title">
            {product.name}
          </span>
          <span className="product-preview__product-info__price">
            EUR {product.price}
          </span>
          <span className="product-preview__product-info__quantity">
            Uds {product.quantity}
          </span>
        </div>
      </div>
      <Button variant="danger" onClick={deleteProduct}>
        Eliminar
      </Button>
    </Fragment>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};

ProductPreview.defaultProps = {
  product: {
    id: 0,
    name: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
  },
};

export default ProductPreview;
