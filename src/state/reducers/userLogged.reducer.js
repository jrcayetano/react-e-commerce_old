import { USER_LOGIN, USER_LOGOUT } from "../actions/userLogged.actions";

export const initialState = {
  isLogged: false,
  username: "",
  email: "",
};

export default function userLoggedReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}
