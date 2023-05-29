import classes from "./Login.module.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../api-calls";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  console.log('user is',user);

  const registerHandler = () => {
    navigate("/register");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginCall(
      {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      },
      dispatch
    );
    
    navigate('/')
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
            <button className={classes.loginButton} disabled={isFetching}>
              {isFetching ? <CircularProgress size="20px" /> : "Log In"}
            </button>
            <Link
              to="/forgot/password"
              style={{
                textDecoration: "none",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className={classes.loginForgot}>Forgot Password?</span>
            </Link>
            <button
              className={classes.loginRegisterButton}
              onClick={registerHandler}
            >
              {isFetching ? (
                <CircularProgress size="20px" />
              ) : (
                "Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
