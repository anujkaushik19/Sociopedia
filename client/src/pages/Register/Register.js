import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const occupation = useRef();
  const from = useRef();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { verify } = useContext(AuthContext);
  console.log("registration verify ", verify);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (verify) {
      if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!");
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          occupation: occupation.current.value,
          from: from.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          user.profilePicture = fileName;
          try {
            await axios.post("/upload", data);
          } catch (err) {
            console.log(err);
          }
        }

        try {
          await axios.post("/auth/register", user);
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      }
    }
    else{
      alert('please verify otp!')
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
              placeholder="Username"
              className={classes.loginInput}
              ref={username}
              required
              type="text"
            />
            <input
              placeholder="Email"
              className={classes.loginInput}
              ref={email}
              required
              type="email"
            />
            <input
              placeholder="Password"
              type="password"
              className={classes.loginInput}
              ref={password}
              minLength="6"
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className={classes.loginInput}
              ref={passwordAgain}
              minLength="6"
              required
            />
            <input
              placeholder="Occupation"
              className={classes.loginInput}
              ref={occupation}
              required
            />
            <input
              placeholder="From"
              className={classes.loginInput}
              ref={from}
              required
            />
            <div className={classes.imageContainer}>
              <label htmlFor="file" style={{ color: "white", fontWeight: 500 }}>
                Profile Picture
              </label>
              <input
                type="file"
                className={classes.inputImage}
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button
              style={{ color: "white", textAlign: "center" }}
              className={classes.loginButton}
              onClick={() => navigate("/forgot/password")}
            >
              Otp verification
            </button>

            <button className={classes.loginButton} type="submit">
              Sign Up
            </button>

            <Link
              to="/login"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <button className={classes.loginRegisterButton}>
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
