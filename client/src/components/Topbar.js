import React, { useContext } from "react";

import classes from "./Topbar.module.css";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Topbar() {
  const { user } = useContext(AuthContext);
 
  const navigate = useNavigate();


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logOutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("fieldvalues");
    navigate('/');
    window.location.reload();
    
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <NavLink to="/" className={classes.logo}>
          Sociopedia
        </NavLink>
      </div>
      <div className={classes.center}>
        <div className={classes.searchBar}>
          <SearchIcon className={classes.searchIcon} />
          <input
            type="text"
            className={classes.searchInput}
            placeholder="search for your friends"
          />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.topbarLinks}>
          <div className={classes.topbarLink}>Homepage</div>
          <button className={classes.logOut} onClick={logOutHandler}>
            Log Out
          </button>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <PersonIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <NavLink to='/messenger' style={{textDecoration:'none',color:'white'}}>
              <ChatIcon />
            </NavLink>
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <NotificationsIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img
            src={PF + user.profilePicture}
            alt=""
            className={classes.topbarImg}
            
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
