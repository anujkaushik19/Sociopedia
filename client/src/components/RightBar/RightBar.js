import classes from "./RightBar.module.css";


import Suggested from "./Suggested";

function RightBar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.wrapper}>
        <div className={classes.birthdayContainer}>
          <img src="assets/gift.png" alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Anuj Kaushik</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className={classes.rightbarAd} />
        <Suggested/>
        <div className={classes.friends}>
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img src="assets/person/3.jpeg" alt="" className={classes.rightbarProfileImg} />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>John Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img src="assets/person/3.jpeg" alt="" className={classes.rightbarProfileImg} />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>John Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img src="assets/person/3.jpeg" alt="" className={classes.rightbarProfileImg} />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>John Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img src="assets/person/3.jpeg" alt="" className={classes.rightbarProfileImg} />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>John Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img src="assets/person/3.jpeg" alt="" className={classes.rightbarProfileImg} />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>John Carter</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
