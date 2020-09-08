export const USER_LOGIN = "USER/LOGIN";
export const USER_LOGOUT = "USER/LOGOUT";

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
