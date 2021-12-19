import axios from "axios";

import { getListsFailure, getListsSuccess, getListsStart } from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch({ type: "GET_LISTS_START" });
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "GET_LISTS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_LISTS_FAILURE" });
  }
};

//create list
export const createList = async (newList, dispatch) => {
  dispatch({ type: "CREATE_LIST_START" });
  //dispatch(getMoviesStart());
  try {
    const res = await axios.post("/lists", newList, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "CREATE_LIST_SUCCESS", payload: res.data });
    //dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch({ type: "CREATE_LIST_FAILURE" });
    // dispatch(getMoviesFailure());
  }
};

//delete
export const deleteList = async (dispatch, id) => {
  dispatch({ type: "DELETE_LIST_START" });
  try {
    const res = await axios.delete(`/lists/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "DELETE_LIST_SUCCESS", payload: id });
  } catch (err) {
    dispatch({ type: "DELETE_LIST_FAILURE" });
  }
};
