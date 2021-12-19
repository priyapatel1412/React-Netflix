import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../context/authContext/apiCalls";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    toast.success("User loggedin successfully");
    history.push("/");
  };

  return (
    <div className="login">
      <form action="" className="loginForm">
        <label htmlFor="" className="loginLable">
          Email Address:
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="loginInput"
          placeholder="email"
        />
        <label htmlFor="" className="loginLable">
          Password:
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="loginInput"
          placeholder="password"
        />
        <button
          onClick={handleClick}
          disable={isFetching}
          className="loginButton"
        >
          Login
        </button>
      </form>
    </div>
  );
}
