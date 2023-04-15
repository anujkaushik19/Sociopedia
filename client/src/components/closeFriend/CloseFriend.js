import axios from "axios";
import React, { useContext, useState,useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./CloseFriend.css";

function CloseFriend() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [posts, setPosts] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await axios.get(`/posts/timeline/${currentUser._id}`);
        setPosts(postsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  });
  return (
    <div className="Leftbar">
      {/* <div className="NotificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px" }}>Notifications</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started to following you
          </p>
          <img src={PF + "post/1.jpeg"} className="followinguserimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Suman started to following you
          </p>
          <img src={PF + "post/1.jpeg"} className="followinguserimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Suman started to following you
          </p>
          <img src={PF + "post/1.jpeg"} className="followinguserimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 17,

            marginBottom: 19,
          }}
        >
          <img src={PF + "post/1.jpeg"} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={PF + "post/1.jpeg"} className="likeimage" alt="" />
        </div>
      </div> */}
      <div className="NotificationsContainer2">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div>
          {posts.map((post)=>(
           <img src={PF + post.img} className="exploreimage" alt="" />
          ))}
          
          
        </div>
      </div>
    </div>
  );
}

export default CloseFriend;
