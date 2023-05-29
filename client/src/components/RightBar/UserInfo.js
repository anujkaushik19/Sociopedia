import React, { useContext, useState, useEffect } from "react";
import "./UserInfo.css";
import { AuthContext } from "../../context/AuthContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink, useNavigate } from "react-router-dom";

function UserInfo({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user:currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="profileLeftBar">
      <div className="NotificationsContainer3">
        
        <div style={{ display: "flex", alignItems: "center", marginTop: 0 }}>
          <img
            src={PF + user.profilePicture}
            className="Profilepageimage"
            alt=""
          />
          <div>
            <p
              style={{
                marginLeft: 6,
                marginTop: 20,
                color: "black",
                textAlign: "start",
              }}
            >
              {user.username}
            </p>
            <p
              style={{
                marginLeft: 6,
                marginTop: 20,
                color: "black",
                textAlign: "start",
                marginTop: -16,
                fontSize: 11,
              }}
            >
              {user.occupation}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Followings
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            10
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -20,
          }}
        >
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Followers
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            12
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -20,
          }}
        >
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            From
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            {user.from}
          </p>
        </div>
        <div style={{ marginTop: -20 }}>
          <h5
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: "14px",
              marginRight: 30,
              marginTop: 30,
              textAlign: "start",
            }}
          >
            Description
          </h5>
          <p
            style={{
              color: "black",
              fontSize: "12px",
              marginTop: -20,
              textAlign: "start",
              marginLeft: "10px",
            }}
          >
            Inspired to Inspire
          </p>
        </div>
        {/* {user.other._id !== id ? (
          <div onClick={handleFollow}>
            <button
              style={{
                width: "100%",
                paddingTop: 7,
                paddingBottom: 7,
                border: "none",
                backgroundColor: "green",
                color: "white",
              }}
            >
              {Follow}
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{
                width: "100%",
                paddingTop: 7,
                paddingBottom: 7,
                border: "none",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Edit Bio
            </button>
          </div>
        )} */}
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "30px",
          }}
        >
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            <InstagramIcon />
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            10
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "30px",
          }}
        >
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            <NavLink
              to="https://www.linkedin.com/in/anuj-kaushik-584594216/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <LinkedInIcon />
            </NavLink>
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            10
          </p>
        </div>
        {user._id === currentUser._id && <button className='edit' onClick={()=>navigate('/profile/updateInfo/'+currentUser.username)}>Edit Info</button>}
      </div>
    </div>
  );
}

export default UserInfo;
