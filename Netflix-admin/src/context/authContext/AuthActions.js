export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  paylod: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout
export const logout = () => ({
  type: "LOGOUT_SUCCESS",
});
