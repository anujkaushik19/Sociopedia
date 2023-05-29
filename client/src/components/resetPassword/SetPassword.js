import classes from "./SetPassword.module.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../api-calls";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const navigate = useNavigate();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      axios.put("/auth/password", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Sociopedia</h3>
          <span className={classes.loginDesc}>
            Connect with friends and the world around you on Sociopedia
          </span>
        </div>
        <div className={classes.loginRight}>
          <form className={classes.loginBox} onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email"
              className={classes.loginInput}
              required
              ref={emailInputRef}
            />
            <input
              type="password"
              placeholder="Password"
              className={classes.loginInput}
              required
              minLength="6"
              ref={passwordInputRef}
            />
            <button className={classes.loginButton}>Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
