import axios from "axios";
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
} from "./MovieActions";

//get all movies
export const getMovies = async (dispatch) => {
  dispatch({ type: "GET_MOVIES_START" });
  //dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "GET_MOVIES_SUCCESS", payload: res.data });
    //dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch({ type: "GET_MOVIES_FAILURE" });
    // dispatch(getMoviesFailure());
  }
};

//create movie
export const createMovies = async (newMovie, dispatch) => {
  dispatch({ type: "CREATE_MOVIES_START" });
  //dispatch(getMoviesStart());
  try {
    const res = await axios.post("/movies", newMovie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "CREATE_MOVIES_SUCCESS", payload: res.data });
    //dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch({ type: "CREATE_MOVIES_FAILURE" });
    // dispatch(getMoviesFailure());
  }
};

//delete movie
export const deleteMovie = async (id, dispatch) => {
  dispatch({ type: "DELETE_MOVIES_START" });
  try {
    const res = await axios.delete(`/movies/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch({ type: "DELETE_MOVIES_SUCCESS", payload: id });
  } catch (err) {
    dispatch({ type: "DELETE_MOVIES_FAILURE" });
  }
};
