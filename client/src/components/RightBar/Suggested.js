import classes from "./Suggested.module.css";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Suggested() {
  const [users, setUsers] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersList = await axios.get("/users/all");
        const newUser = usersList.data.filter(
          (user) => user._id !== currentUser._id
        );
        let updatedUser = [];
        {
          newUser.map((user) => {
            if (!user.followers.includes(currentUser._id)) {
              updatedUser.push(user);
            }
          });
        }

        setUsers(updatedUser);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [currentUser._id]);
  

  return (
    <div className={classes.suggestedContainer}>
      <h3 style={{ textAlign: "start", marginLeft: "10px" }}>
        Suggested for you
      </h3>
      {users.map((user) => (
        <div style={{ marginTop: "15px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/profile/${user.username}`}>
                <img
                  src={PF + user.profilePicture}
                  alt=""
                  className={classes.profileImage}
                />
              </Link>
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  {user.username}
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "8px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  {user.occupation}
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <PersonAddIcon
                className={classes.addFriend}
                onClick={async () => {
                  try {
                    await axios.put("/users/" + user._id + "/follow", {
                      userId: currentUser._id,
                    });
                    dispatch({ type: "FOLLOW", payload: user._id });
                    await axios.post("/conversations", {
                      senderId: currentUser._id,
                      recieverId: user._id,
                    });
                  } catch (err) {
                    console.log(err);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggested;
