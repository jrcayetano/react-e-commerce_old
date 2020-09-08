import { combineReducers } from "redux";

import shoppingProductReducer from "./shopping.reducer";
import userLoggedReducer from "./userLogged.reducer";

const rootReducer = combineReducers({
  products: shoppingProductReducer,
  userLogged: userLoggedReducer,
});

export default rootReducer;
