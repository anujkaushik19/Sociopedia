import classes from "./Post.module.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Picker from "emoji-picker-react";

import { useState, useEffect, useContext } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Options from "./Options";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [Comments, setComments] = useState(post.comments);
  const [commentMessage, setCommentMessage] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [update,setUpdate] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(
    () => {
      setIsLiked(post.likes.includes(currentUser._id));
    },
    [currentUser._id],
    post.likes
  );

  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get(`/users/?userId=${post.userId}`, {
        userId: currentUser._id,
      });

      setUser(user.data);
    };
    fetchUser();
  }, [post.userId]);
  

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like");
    } catch (err) {}
    setLike(isLiked ? like : like + 1);
    setIsLiked(true);
  };
  const dislikeHandler = () => {
    setLike(isLiked ? like - 1 : like);
    setIsLiked(false);
  };
  
  const addComment = async () => {
    const comment = {
      username: currentUser.username,
      title: `${commentMessage}`,
      userImg: currentUser.profilePicture,
    };
    setComments(Comments.concat(comment));
    try {
      await axios.post("/posts/comments", {
        postId: post._id,
        comment: commentMessage,
        username: currentUser.username,
        userImg: currentUser.profilePicture,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addCommentHandler = () => {

    addComment();
  };

  const showCommentBoxHandler = () => {
    setShowComment(!showComment);
  };
  
  return (
    <div className={classes.post}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.postTopLeft}>
            <Link to={`/profile/${user.username}`}>
              <img
                src={PF + user.profilePicture}
                className={classes.postProfileImg}
                alt=""
              />
            </Link>
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>{format(post.createdAt)}</span>
          </div>
          {post.userId === currentUser._id && 
          <div className={classes.postTopRight}>
            <Options post={post}/>
          </div>}
        </div>
        <div className={classes.center}>
          <span className={classes.postText}>{post?.desc}</span>

          {post.img ? (
            <img src={PF + post.img} alt="" className={classes.postImg} />
          ) : post.video !== "" ? (
            <video
              width="750"
              height="500"
              controls
              className={classes.postVideo}
            >
              <source src={PF + post.video} type="video/mp4" />
            </video>
          ) : (
            ""
          )}
        </div>
        <div className={classes.bottom}>
          <div className={classes.postBottomLeft}>
            <img
              src={PF + "heart.png"}
              className={classes.likeIcon}
              onClick={likeHandler}
              alt=""
            />
            <ThumbDownOffAltIcon
              className={classes.likeIcon}
              onClick={dislikeHandler}
            />
            <span className={classes.postLikeCounter}>
              {like} people like it
            </span>
          </div>
          <div className={classes.postBottomRight}>
            <span
              className={classes.postCommentText}
              onClick={showCommentBoxHandler}
            >
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
      {showComment && (
        <div style={{ padding: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <img
              src={PF + currentUser.profilePicture}
              className={classes.postProfileImg}
              alt=""
            />
            {/* <p style={{marginLeft:'6px'}}>Anuj Kaushik</p> */}
            <input
              type="text"
              className={classes.commentInput}
              placeholder="write your views"
              onChange={(e) => setCommentMessage(e.target.value)}
            />
            {/* <div className={classes.picker}>
            <Picker/>
            </div> */}
            <button className={classes.addComment} onClick={addCommentHandler}>
              POST
            </button>
          </div>

          {Comments.map((item) => (
            <div
              style={{
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "9px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={PF + item.userImg}
                  className={classes.postProfileImg}
                  alt=""
                />
                <p style={{ marginLeft: "6px", fontSize: 15 }}>
                  {item.username}
                </p>
              </div>

              <p
                style={{
                  marginLeft: "39px",
                  textAlign: "start",
                  marginTop: "-4px",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
