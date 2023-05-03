import React, { useEffect, useState } from "react";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import RightBar from "../RightBar/RightBar";
import classes from "./Profile.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile({bool}) {
  const [user, setUser] = useState({});

  const params = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get(`/users?username=${params.username}`);

      setUser(user.data);
      
    };
    fetchUser();
    
  }, [params.username]);
  

  const [cover, setCover] = useState(user.coverPicture === "");

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                src={ PF+user.coverPicture }
                className={classes.profileCoverImg}
                alt=""
              />
              <img
                src={PF + user.profilePicture}
                className={classes.profileUserImg}
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>{user.username}</h4>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed username={params.username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
