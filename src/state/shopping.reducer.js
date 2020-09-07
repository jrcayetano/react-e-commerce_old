import {
  ADD_TO_CART,
  DELETE_FROM_CART
} from "./shopping.action;

export const initialState = {
  shoppinCart: [],
};

export const shoppingProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, shoppinCart: action.payload };
    default:
      return state;
  }
};