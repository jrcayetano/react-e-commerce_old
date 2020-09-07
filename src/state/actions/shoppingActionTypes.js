export const ADD_PRODUCT_SHOPPINGCART = "PRODUCT/ADD_PRODUCT_SHOPPINGCART";
export const DELETE_PRODUCT_SHOPPINGCART =
  "PRODUCT/DELETE_PRODUCT_SHOPPINGCART";
export const GET_PRODUCT_SHOPPINGCART = "PRODUCT/GET_PRODUCT_SHOPPINGCART";
export const INCREMENT_PRODUCT_SHOPPINGCART =
  "PRODUCT/INCREMENT_PRODUCT_SHOPPINGCART";
export const TOGGLE_SHOPPINGCART_LIST = "PRODUCT/TOGGLE_SHOPPINGCART_LIST";

export const addProductShoppingCart = (product) => ({
  type: ADD_PRODUCT_SHOPPINGCART,
  payload: product, // product
});

export const deleteProductShoppingCart = (productId) => ({
  type: DELETE_PRODUCT_SHOPPINGCART,
  payload: productId,
});

export const getProductShoppingCart = () => ({
  type: GET_PRODUCT_SHOPPINGCART,
});

export const toggleShoppingCartList = () => ({
  type: TOGGLE_SHOPPINGCART_LIST,
});

export const incrementProductShoppingCart = (productId) => ({
  type: INCREMENT_PRODUCT_SHOPPINGCART,
  payload: productId, // product
});
