import React, { useState } from "react";


export default function ForgotPassword() {
    
  
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
          backgroundColor: "black",
        }}
      >
        <h4 style={{color:'white',display:'flex',justifyContent:'center'}}>OTP VERIFICATION</h4>
        <p style={{ color: "white" }}>Enter your Email</p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type={"text"}
            placeholder="Email"
            style={{
              flex: 1,
              minWidth: "40px",
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "10px",
            }}
           
          />
          <button
            style={{
              width: "40%",
              border: "none",
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              margin: "20px 0px",
              cursor: "pointer",
            }}
           
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
