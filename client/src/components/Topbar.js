import React from "react";

import classes from "./Topbar.module.css";


import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


function Topbar() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <span className={classes.logo}>Sociopedia</span>
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
          <div className={classes.topbarLink}>Timeline</div>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <PersonIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <ChatIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <NotificationsIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
        </div>
        <img src='/assets/person/1.jpeg' alt="" className={classes.topbarImg} />
      </div>
    </div>
  );
}

export default Topbar;
