import axios from 'axios';
import { useEffect,useState } from 'react';
import classes from './Conversation.module.css'

function Conversation({conversation,currentUser}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const friendId = conversation.members.find((m)=> m !== currentUser._id);
  const [user,setUser] = useState(async ()=>{
    try{
      const res = await axios.get('/users?userId='+friendId);
      setUser(res.data);

    }catch(err){
      console.log(err)
    }
   }); // for setting friend user

  

  useEffect(()=>{
     const friendId = conversation.members.find((m)=> m !== currentUser._id);
     const getUser = async ()=>{
      try{
        const res = await axios.get('/users?userId='+friendId);
        setUser(res.data);

      }catch(err){
        console.log(err)
      }
     }
     getUser();
  },[currentUser,conversation])
  
  return (
    <div className={classes.conversation}>
      <img src={PF + user.profilePicture} className={classes.conversationImg} alt="" />
      <span className={classes.conversationName}>{user.username}</span>
    </div>
  )
}

export default Conversation