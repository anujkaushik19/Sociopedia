import Online from "../Online/Online";
import classes from "./RightBar.module.css";
import { Users } from "../../dummydata";
import { useState, useEffect, useContext } from "react";
import Suggested from "./Suggested";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import UserWidget from "./UserInfo";
import UserInfo from "./UserInfo";
import Messages from "./Messages";
import DoneIcon from '@mui/icons-material/Done';

function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [followers, setFollowers] = useState([]);
  const[request,setRequest] = useState(false);
  

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [fileCover, setFileCover] = useState(null);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

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

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const followersList = await axios.get("/users/followers/" + user._id);

        setFollowers(followersList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFollowers();
  }, [user]);

  const followHandler = async () => {
    try {

     await axios.put('/users/request/'+user._id,{
      userId : currentUser._id,
      values : {
        username : currentUser.username,
        profilePicture:currentUser.profilePicture
      }
     });

 
      // if (followed) {
      //   await axios.put("/users/" + user._id + "/unfollow", {
      //     userId: currentUser._id,
      //   });
      //   dispatch({ type: "UNFOLLOW", payload: user._id });
      // } else {
      //   await axios.put("/users/" + user._id + "/follow", {
      //     userId: currentUser._id,
      //   });
      //   dispatch({ type: "FOLLOW", payload: user._id });
      // }
    } catch (err) {
      console.log(err);
    }
    setRequest(true);
    setFollowed(!followed);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const updatedUser = {
      username: currentUser.username,
      email: currentUser.email,
      password: currentUser.password,
      occupation: currentUser.occupation,
      from: currentUser.from,
      profilePicture: currentUser.profilePicture,
      desc: "chunni me",
    };
    if (fileCover) {
      const data = new FormData();
      const fileName = Date.now() + fileCover.name;
      data.append("name", fileName);
      data.append("file", fileCover);
      if (fileCover.type === "image/jpeg") {
        updatedUser.coverPicture = fileName;
      }
      
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      console.log("inside try");
      await axios.put("/auth/update/" + currentUser._id, updatedUser);
      window.location.reload();
    } catch (err) {}
  };

  const HomeRightBar = () => {
    return (
      <div className={classes.homebar}>
        <div className={classes.birthdayContainer}>
          <img src="assets/gift.png" alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Anuj Kaushik</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className={classes.rightbarAd} />
        <Messages/>
        <Suggested />
        {/* <div className={classes.friends}>
          <h4 className={classes.rightbarTitle}>Online Friends</h4>
          <ul className={classes.rightbarFriendList}>
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </ul>
        </div> */}
      </div>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div>
        {user.username !== currentUser.username && (
          <button className={classes.followBtn} onClick={followHandler}>
            {request ? "Request Sent" : "Follow"}
            {request ? <DoneIcon /> : <AddIcon />}
          </button>
        )}
        {user.username === currentUser.username && (
          <form className={classes.shareOptions} onSubmit={submitHandler}>
            <label htmlFor="filec" className={classes.shareOption}>
              <PermMediaIcon htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>
                change cover photo
              </span>
              <input
                style={{ display: "none" }}
                type="file"
                id="filec"
                accept=".png,.jpeg,.jpg,.mp4"
                onChange={(e) => {
                  console.log(e.target.files);
                  return setFileCover(e.target.files[0]);
                }}
              />
              <button className={classes.followBtn2} type="submit">
                upload
              </button>
            </label>
          </form>
        )}

        <UserInfo user={user} />
        <h4 className={classes.rightbarTitle}>User Friends</h4>
        <div className={classes.rightbarFollowings}>
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.rightbarFollowing}>
                <img
                  src={PF + friend.profilePicture}
                  alt=""
                  className={classes.rightbarFollowingImg}
                />
                <span className={classes.rightbarFollowingName}>
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <hr />
        <h4 className={classes.rightbarTitle}>User Followers</h4>
        <div className={classes.rightbarFollowings}>
          {followers.length>0 && (followers.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none",color:'black' }}
            >
              <div className={classes.rightbarFollowing}>
                <img
                  src={PF + friend.profilePicture}
                  alt=""
                  className={classes.rightbarFollowingImg}
                />
                <span className={classes.rightbarFollowingName}>
                  {friend.username}
                </span>
              </div>
            </Link>
          )))}
        </div>
      </div>
    );
  };
  return (
    <div className={classes.rightbar}>
      <div className={classes.wrapper}>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default RightBar;
