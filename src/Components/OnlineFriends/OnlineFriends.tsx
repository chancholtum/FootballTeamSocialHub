import styles from "./OnlineFriends.module.css";
import Image from "next/image";

function OnlineFriends({ user }) {
  return (
    <>
      <div className={styles.RightBarFriends}>
        <div className={styles.RightProfileImgContainer}>
          <Image
            src={user.ProfilePicture}
            height={50}
            width={50}
            alt="logo"
            className={styles.RightBarImgurl}
          />
          <span className={styles.RightrBarOnlineGreen}></span>
        </div>

        <span className={styles.rightBarUsername}>{user.UserName}</span>
      </div>
    </>
  );
}

export default OnlineFriends;
