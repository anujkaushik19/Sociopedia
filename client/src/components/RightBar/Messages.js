import React from "react";
import classes from "./Messages.module.css";
import { ClassNames } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';


function Messages() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={classes.messages}>
      <div className={classes.heading}>
      
        <h4 style={{marginLeft:'10px'}}>Messages</h4>
        <EditIcon/> 
        
      </div> 
     
      <div className={classes.searchBar}>
        <SearchIcon style={{fontSize:'1.4rem'}} />
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
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + '/person/1.jpeg'} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
        
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + '/person/1.jpeg'} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
        
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + '/person/1.jpeg'} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
        
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + '/person/1.jpeg'} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
        
      </div>
      <div className={classes.message}>
        <div className={classes["profile-photo"]}>
          <img src={PF + '/person/1.jpeg'} alt="" />
          <div className={classes.active2}></div>
        </div>
        <div className={classes["message-body"]}>
          <h5>Vaibhav</h5>
          <p className={classes["text-muted"]}>just woke up</p>
        </div>
        
      </div>
    </div>
  );
}

export default Messages;
