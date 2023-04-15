import classes from "./Share.module.css";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Picker from "emoji-picker-react";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import InputEmoji from "react-input-emoji";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Modal } from "@mui/material";

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      if (file.type === "image/jpeg") {
        newPost.img = fileName;
      }
      if (file.type === "video/mp4") {
        newPost.video = fileName;
      }
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  const colorPickerHandler = () => {
    setShowPicker(true);
  };

  return (
    <div className={classes.share}>
      <div className={classes.wrapper}>
        <div className={classes.shareTop}>
          <img
            src={PF + user.profilePicture}
            alt=""
            className={classes.shareProfileImg}
          />
          <input
            placeholder={"whats on your mind " + user.username + "?"}
            className={classes.shareInput}
            ref={desc}
          />

          {showPicker && (
            <div className={classes.picker}>
              {/* <Picker /> */}
            </div>
          )}

          <SentimentVerySatisfiedIcon
            style={{ cursor: "pointer" }}
            onClick={colorPickerHandler}
          />
        </div>
        <hr className={classes.shareHr} />
        {file && file.type === "image/jpeg" && (
          <div className={classes.shareImgContainer}>
            <img
              src={URL.createObjectURL(file)}
              className={classes.shareImg}
              alt=""
            />
            <CancelIcon
              className={classes.shareCancelImg}
              onClick={() => {
                setFile(null);
              }}
            />
          </div>
        )}
        {file && file.type === "video/mp4" && (
          <div className={classes.shareImgContainer}>
            <video
              width="750"
              height="500"
              controls
              className={classes.shareVideo}
            >
              <source src={URL.createObjectURL(file)} type="video/mp4" />
            </video>
            <CancelIcon
              className={classes.shareCancelImg}
              onClick={() => {
                setFile(null);
              }}
            />
          </div>
        )}
        <form className={classes.shareBottom} onSubmit={submitHandler}>
          <div className={classes.shareOptions}>
            <label htmlFor="file" className={classes.shareOption}>
              <PermMediaIcon htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,.mp4"
                onChange={(e) => {
                  console.log(e.target.files);
                  return setFile(e.target.files[0]);
                }}
              />
            </label>
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
          <button className={classes.shareButton} type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
