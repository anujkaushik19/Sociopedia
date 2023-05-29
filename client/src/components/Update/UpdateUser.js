import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./UpdateUser.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../api-calls";

function UpdateUser() {
  const email = useRef("");
  const username = useRef("");
  const { user: currentUser ,dispatch} = useContext(AuthContext);

  const occupation = useRef("");
  const from = useRef("");
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { verify } = useContext(AuthContext);
  console.log("registration verify ", verify);
  const values = JSON.parse(localStorage.getItem("fieldvalues"));
  console.log(values);
  const [fileCover, setFileCover] = useState(null);

  console.log('currrent user is ',currentUser)

  useEffect(() => {
    localStorage.setItem("fieldvalues", JSON.stringify(values));
    if (values) {
      email.current.value = values?.email;
      username.current.value = values?.username;
      // password.current.value=values?.password;
      occupation.current.value = values?.occupation;
      from.current.value = values?.from;
      // passwordAgain.current.value=values?.passwordAgain;
    }
  }, []);
  console.log("verified status is", verify);

  console.log("field values", values);
  console.log("file is", file);

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: currentUser.password,
      occupation: occupation.current.value,
      from: from.current.value,
      profilePicture: file,
      coverPicture: fileCover,
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
    if (fileCover) {
      const data = new FormData();
      const fileName = Date.now() + fileCover.name;
      data.append("name", fileName);
      data.append("file", fileCover);
      if (fileCover.type === "image/jpeg") {
        user.coverPicture = fileName;
      }

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    console.log('final over user is ',user);
    try {
      await axios.put("/users/update/"+currentUser._id,user);
      const email = currentUser.email;
      const password = currentUser.password;
      loginCall(
        {
          email: email,
          password: password,
        },
        dispatch
      );
     
      navigate("/login");
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
              placeholder="Username"
              className={classes.loginInput}
              ref={username}
              required
              type="text"
              // value={values?.username}
              value={username.current.value}
            />
            <input
              placeholder="Email"
              className={classes.loginInput}
              ref={email}
              required
              type="email"
              
              // value={values?.email}
              value={email.current.value}
            />

            <input
              placeholder="Occupation"
              className={classes.loginInput}
              ref={occupation}
              required
             
              // value={values?.occupation}
              value={occupation.current.value}
            />
            <input
              placeholder="From"
              className={classes.loginInput}
              ref={from}
              required
              
              // value={values?.from}
              value={from.current.value}
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
            <div className={classes.imageContainer}>
              <label htmlFor="file" style={{ color: "white", fontWeight: 500 }}>
                Cover Picture
              </label>
              <input
                type="file"
                className={classes.inputImage}
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  console.log(e.target.files);
                  return setFileCover(e.target.files[0]);
                }}
              />
            </div>
            {!verify && (
              <Link to={"/forgot/password"} state={{ updateuser: true }} className={classes.loginButton}>
                <button
                  style={{ color: "white", textAlign: "center" }}
                  className={classes.loginButton}
                  // onClick={() => navigate("/forgot/password")}
                >
                  OTP Verification
                </button>
              </Link>
            )}

            {verify && (
              <button
                style={{ color: "white", textAlign: "center" }}
                className={classes.loginButton}
                type="submit"
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
