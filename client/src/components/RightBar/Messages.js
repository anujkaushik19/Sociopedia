import React, { useContext } from "react";
import classes from "./Messages.module.css";
import { ClassNames } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import { AuthContext } from "../../context/AuthContext.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Messages() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("current user id is", user);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get("/users/friends/" + user._id);

        setFriends(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  console.log("friends are", friends);
  return (
    <div className={classes.messages}>
      <div className={classes.heading}>
        <h4 style={{ marginLeft: "10px" }}>Messages</h4>
        <EditIcon />
      </div>
      <div className={classes.searchBar}>
        <SearchIcon style={{ fontSize: "1.4rem" }} />
        <input
          type="search"
          placeholder="Search Messages"
          id="message-search"
          className={classes.input}
        />
      </div>
      <div className={classes.category}>
        <h6 className={classes.active}>Primary</h6>
        <h6 className={classes.active}>General</h6>
        <h6 className={classes["message-requests"]}>Requests(7)</h6>
      </div>
      {friends.map((friend) => (
        <Link className={classes.message} to='/usermessage' state={friend._id} >
          <div className={classes["profile-photo"]}>
            <img src={PF + friend.profilePicture} alt="" />
            <div className={classes.active2}></div>
          </div>

          <div className={classes["message-body"]}>
            <h5>{friend.username}</h5>
            <p className={classes["text-muted"]}>{friend.occupation}</p>
          </div>
        </Link>
      ))}
      
      {/* <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + "/person/1.jpeg"} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + "/person/1.jpeg"} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + "/person/1.jpeg"} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + "/person/1.jpeg"} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
      </div> */}
    </div>
  );
}

export default Messages;
