export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});
export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  paylod: movies,
});
export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});
export const createMoviesStart = () => ({
  type: "CREATE_MOVIES_START",
});
export const createMoviesSuccess = (movie) => ({
  type: "CREATE_MOVIES_SUCCESS",
  paylod: movie,
});
export const createMoviesFailure = () => ({
  type: "CREATE_MOVIES_FAILURE",
});
export const updateMoviesStart = () => ({
  type: "UPDATE_MOVIES_START",
});
export const updateMoviesSuccess = (movie) => ({
  type: "UPDATE_MOVIES_SUCCESS",
  paylod: movie,
});
export const updateMoviesFailure = () => ({
  type: "UPDATE_MOVIES_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIES_START",
});
export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  paylod: id,
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
