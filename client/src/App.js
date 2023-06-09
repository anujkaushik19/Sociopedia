import Login from "./pages/Login/Login";
import React, { useContext, useEffect } from "react";
import Profile from "./components/Profile/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/Messenger/Messenger";
import UpdateUser from "./components/Update/UpdateUser";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";
import classes from './components/RightBar/Messages.module.css'
import OtpVerify from "./pages/ForgotPassword/OtpVerify";
import SetPassword from "./components/resetPassword/SetPassword";


function App() {

  const messages = document.querySelector(`.${classes.messages}`);
  // const message = messages.querySelectorAll(`.${classes.messages}`);
  const messageSearch = document.querySelector(`.${classes.input}`);
  console.log('messages',messages)
  
  const { user,verify } = useContext(AuthContext);

  
  
  
 
  const navigate = useNavigate();
  console.log('user is',user);
  // useEffect(()=>{
    
  //   localStorage.setItem("fieldvalues", JSON.stringify({
  //     username : user?.username,
  //     email:user?.email,
  //     // password:user.current.value,
  //     // passwordAgain:passwordAgain.current.value,
  //     from:user?.from,
  //     occupation:user?.occupation,
  //   }));

  // },[])
  

  // const searchMessage = ()=>{
  //   const val = messageSearch.value.toLowerCase();
  //   console.log(val)
  // }
  // messageSearch.addEventListener('keyup',searchMessage);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {user && <Home />}
              {!user && <Register />}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {user && <Home />}
              {!user && <Login />}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              {user && <Home />}
              {!user && <Register />}
            </>
          }
        />
         <Route
          path="/messenger"
          element={
            <>
              {!user && <Register/>}
              {user && <Messenger />}
            </>
          }
        />
        <Route path="/profile/:username" element={<Profile bool={true} />} />
        <Route path="/profile/updateInfo/:username" element={<UpdateUser/>}/>
        <Route path='/forgot/password' element={<ForgotPassword/>}/>
        
        <Route path='/otp/verify' element={<OtpVerify/>}/>
        <Route path='/set/password' element={<SetPassword/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
