import classes from "./Post.module.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.postTopLeft}>
            <img src="" className={classes.postProfileImage} alt="" />
            <span className={classes.postUsername}>Anuj Kaushik</span>
            <span className={classes.postDate}>5 mins ago</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={classes.center}>
          <span className={classes.postText}>Hey! its my first post:)</span>
          <img src="assets/post/1.jpeg" alt="" className={classes.postImg} />
        </div>
        <div className={classes.bottom}>
            <div className={classes.postBottomLeft}>
                <img src="assets/like.png" className={classes.likeIcon} alt="" />
                <img src="assets/heart.png" className={classes.likeIcon} alt="" />
                <span className={classes.postLikeCounter}>30 people like it</span>
            </div>
            <div className={classes.postBottomRight}>
                <span className={classes.postCommentText}>9 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
