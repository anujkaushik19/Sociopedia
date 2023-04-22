import React from "react";

import classes from "./Sidebar.module.css";


import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import {Users} from '../../dummydata'
import CloseFriend from "../closeFriend/CloseFriend";
import FriendRequests from "../RightBar/FriendRequests";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.wrapper}>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>
            <RssFeedIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Feed</span>
          </li>
          <li className={classes.sidebarListItem}>
            <ChatIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Chats</span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircleOutlineIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Videos</span>
          </li>
          <li className={classes.sidebarListItem}>
            <GroupIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Groups</span>
          </li>
          <li className={classes.sidebarListItem}>
            <BookmarkIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={classes.sidebarListItem}>
            <HelpOutlineIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Questions</span>
          </li>
          <li className={classes.sidebarListItem}>
            <WorkOutlineIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Jobs</span>
          </li>
          <li className={classes.sidebarListItem}>
            <EventIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Events</span>
          </li>
          <li className={classes.sidebarListItem}>
            <SchoolIcon className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={classes.sidebarButton}>Show More</button>
        <hr className={classes.sidebarHr}/>
        <ul className={classes.sidebarFriendList}>
           {/* {Users.map(user=>(
            <CloseFriend user={user} key={user.id}/>
           ))} */}
          <FriendRequests/>
           
           
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
