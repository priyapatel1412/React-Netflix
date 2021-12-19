import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

// export const loginCall = async (user, dispatch) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("auth/login", user);
//     res.data.isAdmin && dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };
