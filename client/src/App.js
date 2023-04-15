import Login from "./pages/Login/Login";
import React, { useContext } from "react";
import Profile from "./components/Profile/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/Messenger/Messenger";
import UpdateUser from "./components/Update/UpdateUser";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Resetpassword from "./pages/ForgotPassword/ResetPassword";

function App() {
  const { user } = useContext(AuthContext);
 
  const navigate = useNavigate();

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
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/updateInfo/:username" element={<UpdateUser/>}/>
        <Route path='/forgot/password' element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
