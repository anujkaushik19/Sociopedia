import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function OtpVerify() {
  const otpInputRef = useRef();
  const navigate = useNavigate();
  const { otp, verify, dispatch, user } = useContext(AuthContext);
  console.log("stored otp ", otp);
  const { state } = useLocation();
  console.log("state is", state);
  const update = state?.updateUser;
  const forgotpassword = state?.forgotpassword;
  console.log('update is',update)
  console.log('forgot password is',forgotpassword)

  const submitHandler = async (event) => {
    event.preventDefault();

    if (+otpInputRef.current.value !== otp) {
      alert("otp not matching!");
    } else {
      dispatch({ type: "VERIFY", payload: true });
    }
    console.log('verified is',verify);
    if (verify) {
      console.log("val is", update);
      if (update) {
        navigate("/profile/updateInfo/" + user.username);
      } else if (forgotpassword) {
        navigate("/set/password");
      }
    } else {
      navigate("/register");
    }
  };

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
        <p style={{ color: "black", textAlign: "center" }}>Enter your otp</p>
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
            type={"number"}
            placeholder="Enter yout otp"
            style={{
              flex: 1,
              minWidth: "40px",
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "10px",
              width: "300px",
            }}
            ref={otpInputRef}
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
