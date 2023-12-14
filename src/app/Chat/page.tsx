import SideBarFriendList from "@/Components/SideBarFriendList/SideBarFriendList";
import styles from "./Chat.module.css";
import { Users } from "../../Data";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function page() {
  return (
    <>
      <div className={styles.ChatContainer}>
        <div className={styles.SidebarContainer}>
          {Users.map((user) => (
            <SideBarFriendList key={user.id} user={user} />
          ))}
        </div>
        <div className={styles.ChatBox}>
          <ChatBubbleIcon className={styles.Icon} />
          <p className={styles.ChatText}>Select your chat</p>
        </div>
      </div>
    </>
  );
}

export default page;
