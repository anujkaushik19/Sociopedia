import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";


export default function ForgotPassword() {
  const emailInputRef = useRef("");
  const navigate = useNavigate();
  const {dispatch,otp} = useContext(AuthContext);
  const {state} = useLocation();
   
  console.log("forgot",state);

  const submitHandler = async (event) => {
    event.preventDefault();
    const emailValue = emailInputRef.current.value;
    
    console.log('email value is',emailValue)
    console.log('anuj')
   
    try {
      const response = await axios.post("/auth/email", {
        email: emailValue,
      });

      console.log('mail response',response.data)
     
      dispatch({ type: "OTP", payload: response.data });
      

    } catch (err) {
      console.log(err);
    }
   
    if(state?.updateuser){
      navigate('/otp/verify',{state:{updateUser:state.updateuser}});
    }
    else if(state?.forgotpassword){
      navigate('/otp/verify',{state:{forgotpassword:state.forgotpassword}});

    }
    navigate('/otp/verify');

    
    // navigate('/register')
  
  };

  console.log('stored otp ',otp)

  

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "25%",
          padding: "20px",
          margin: "auto",
          borderRadius: "10px",
          backgroundColor: "lightGray",
        }}
      >
        <h4
          style={{ color: "black", display: "flex", justifyContent: "center" }}
        >
          OTP VERIFICATION
        </h4>
        <p style={{ color: "black", textAlign: "center" }}>Enter your Email</p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={submitHandler}
        >
          <input
            type={"text"}
            placeholder="Email"
            style={{
              flex: 1,
              minWidth: "40px",
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "10px",
              width: "300px",
            }}
            ref={emailInputRef}
          />
          <button
            style={{
              width: "40%",
              border: "none",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              margin: "20px 0px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
