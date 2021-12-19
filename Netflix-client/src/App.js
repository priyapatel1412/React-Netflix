import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";
function App() {
  const { user } = useContext(AuthContext);
  //const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        {user && (
          <Fragment>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route exact path="/watch" element={<Watch />} />
          </Fragment>
        )}
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
