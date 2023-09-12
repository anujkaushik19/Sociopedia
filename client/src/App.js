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
import Messenger2 from "./pages/Messenger/Messenger2";


function App() {

  const messages = document.querySelector(`.${classes.messages}`);
  // const message = messages.querySelectorAll(`.${classes.messages}`);
  const messageSearch = document.querySelector(`.${classes.input}`);
  console.log('messages',messages)
  
  const { user,verify } = useContext(AuthContext);

  
  
  
 
  const navigate = useNavigate();
  console.log('user is',user);
  
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
        <Route
          path="/usermessage"
          element={
            <>
              {!user && <Register/>}
              {user && <Messenger2 />}
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
