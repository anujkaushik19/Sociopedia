import { useEffect, useState } from 'react';
import classes from './ChatOnline.module.css'
import axios from 'axios';

function ChatOnline({onlineUsers,currentId,setCurrentChat}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends,setFriends] = useState([])
    const [onlineFriends,setOnlinefriends] = useState([])

    
    console.log('friends are',friends)
  return (
    <div className={classes.chatOnline}>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img src={PF + 'person/13.jpeg.png'} alt="" className={classes.chatOnlineImg} />
                <div className={classes.chatOnlineBadge}></div>
            </div>
            <span className={classes.chatOnlineName}>Anuj Kaushik</span>
        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img src={PF + 'person/13.jpeg.png'} alt="" className={classes.chatOnlineImg} />
                <div className={classes.chatOnlineBadge}></div>
            </div>
            <span className={classes.chatOnlineName}>Anuj Kaushik</span>
        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img src={PF + 'person/13.jpeg.png'} alt="" className={classes.chatOnlineImg} />
                <div className={classes.chatOnlineBadge}></div>
            </div>
            <span className={classes.chatOnlineName}>Anuj Kaushik</span>
        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img src={PF + 'person/13.jpeg.png'} alt="" className={classes.chatOnlineImg} />
                <div className={classes.chatOnlineBadge}></div>
            </div>
            <span className={classes.chatOnlineName}>Anuj Kaushik</span>
        </div>
    </div>
  )
}

export default ChatOnline