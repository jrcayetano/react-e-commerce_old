import {
  ADD_PRODUCT_SHOPPINGCART,
  DELETE_PRODUCT_SHOPPINGCART,
  TOGGLE_SHOPPINGCART_LIST,
  INCREMENT_PRODUCT_SHOPPINGCART,
} from "./../actions/shoppingActionTypes";

export const initialState = {
  shoppingcart: [],
  showCartList: false,
};

export default function shoppingProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_SHOPPINGCART:
      return {
        ...state,
        shoppingcart: [...state.shoppingcart, action.payload],
      };
    case DELETE_PRODUCT_SHOPPINGCART:
      return {
        ...state,
        shoppingcart: state.shoppingcart.filter(
          (product) => product.id !== action.payload
        ),
      };
    case TOGGLE_SHOPPINGCART_LIST:
      return {
        ...state,
        showCartList: !state.showCartList,
      };
    case INCREMENT_PRODUCT_SHOPPINGCART:
      return {
        ...state,
        shoppingcart: state.shoppingcart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity++ }
            : { ...product }
        ),
      };
    default:
      return state;
  }
}
