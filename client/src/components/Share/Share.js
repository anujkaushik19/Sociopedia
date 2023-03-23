import classes from "./Share.module.css";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Share() {
  return (
    <div className={classes.share}>
      <div className={classes.wrapper}>
        <div className={classes.shareTop}>
          <img
            src="/assets/person/13.jpeg.png"
            alt=""
            className={classes.shareProfileImg}
          />
          <input
            placeholder="whats on your mind?"
            className={classes.shareInput}
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMediaIcon htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or video</span>
            </div>
          </div>
          <div className={classes.shareOption}>
            <LabelIcon htmlColor="blue" className={classes.shareIcon} />
            <span className={classes.shareOptionText}>Tag</span>
          </div>
          <div className={classes.shareOption}>
            <RoomIcon htmlColor="green" className={classes.shareIcon} />
            <span className={classes.shareOptionText}>Location</span>
          </div>
          <div className={classes.shareOption}>
            <EmojiEmotionsIcon
              htmlColor="goldenrod"
              className={classes.shareIcon}
            />
            <span className={classes.shareOptionText}>Feelings</span>
          </div>
          <button className={classes.shareButton}>Share</button>
        </div>
       
      </div>
    </div>
  );
}

export default Share;
