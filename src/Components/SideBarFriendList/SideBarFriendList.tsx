import styles from "./SideBarFriendList.module.css";
import Image from "next/image";

function SideBarFriendList({ user }) {
  return (
    <>
      <div className={styles.SideBarFriends}>
        <Image
          src={user.ProfilePicture}
          height={35}
          width={35}
          alt="logo"
          className={styles.SideBarFriendImg}
        />
        <span className={styles.SideBarFriendName}>{user.UserName}</span>
      </div>
    </>
  );
}

export default SideBarFriendList;
