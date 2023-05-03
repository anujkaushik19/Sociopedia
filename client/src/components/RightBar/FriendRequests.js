import React, { useContext } from "react";
import "./FriendRequests.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function FriendRequests() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
 

  
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
                  cursor: "pointer",
                }}
                onClick={async () => {
                  try {
                    const res = await axios.put(`/users/${currentUser._id}/follow`, {
                      userId: requser.id,
                    });
                    if (res.status === 200) {
                      dispatch({ type: "FOLLOW", payload: requser.id });
                      try {
                        const value = {
                          username: requser.username,
                          profilePicture: requser.profilePicture,
                          id: requser.id,
                        };
                        const res = await axios.put(
                          "/users/request/remove/" + currentUser._id,
                          {
                            // userId : currentUser._id,
                            values: {
                              username: requser.username,
                              profilePicture: requser.profilePicture,
                              id: requser.id,
                            },
                          }
                        );
                        if (res.status == 200) {
                          dispatch({ type: "REMOVE REQUEST", payload: value.id });
                          
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }
                  } catch (err) {
                    console.log(err);
                  }
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
                  cursor: "pointer",
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
