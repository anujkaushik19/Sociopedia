import React, { useContext } from "react";
import "./FriendRequests.css";
import { AuthContext } from "../../context/AuthContext";

function FriendRequests() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  return (
    <div className="friend-requests">
      <h4 style={{ color: "gray" }}>Requests</h4>
      <div className="wrapper">
        {currentUser?.requests?.map((requser) => (
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={PF + `/${requser.profilePicture}`} alt="" />
              </div>
              <div>
                <h5>{requser.username}</h5>
                <p style={{ fontSize: "10px", color: "gray" }}>
                  8 mutual friends
                </p>
              </div>
            </div>
            <div className="action">
              <button
                style={{
                  height: 30,
                  width: 70,
                  borderRadius: "15px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                }}
              >
                Accept
              </button>
              <button
                style={{
                  height: 30,
                  width: 70,
                  borderRadius: "15px",
                  color: "black",
                  border: "none",
                }}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendRequests;
