import styles from "./RightBar.module.css";
import Image from "next/image";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
import { Users } from "@/Data";

function RightBar() {
  return (
    <>
      <div className={styles.RightBar}>
        <div className={styles.RightBarWrap}>
          <div className={styles.BirthdayContainer}>
            <CardGiftcardIcon className={styles.BirthdayImg} />
            <span className={styles.BirthdayText}>
              Your Friend Bruno and 2 other Friend Have Birthday Today
            </span>
          </div>

          <h2 className={styles.RightBarOnlineFriends}>Online Friend Now</h2>
          <div className="RightBarFriendList">
            {Users.map((user) => (
              <OnlineFriends key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBar;
