import styles from "./SideBar.module.css";

import GradingIcon from "@mui/icons-material/Grading";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SideBarFriendList from "../SideBarFriendList/SideBarFriendList";

import { Users } from "../../Data";

function SideBar() {
  return (
    <>
      <div className={styles.SideBar}>
        <div className={styles.SideBarWrapp}>
          <div className={styles.SideBarList}>
            <li className={styles.SideBarListItem}>
              <GradingIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Feed</span>
            </li>
            <li className={styles.SideBarListItem}>
              <ChatBubbleIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Chats</span>
            </li>
            <li className={styles.SideBarListItem}>
              <GroupsIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Groups</span>
            </li>
            <li className={styles.SideBarListItem}>
              <VideocamIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Videos</span>
            </li>
            <li className={styles.SideBarListItem}>
              <WorkIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Jobs</span>
            </li>
            <li className={styles.SideBarListItem}>
              <EventIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Events</span>
            </li>
            <li className={styles.SideBarListItem}>
              <SchoolIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Courses</span>
            </li>
            <li className={styles.SideBarListItem}>
              <BookmarksIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>Bookmarks</span>
            </li>
            <li className={styles.SideBarListItem}>
              <MoreHorizIcon className={styles.SideBarIcon} />
              <span className={styles.SideBarListItemText}>More</span>
            </li>
          </div>
          <div className={styles.customMargin}></div>
          <ul className="SideBarFriendList">
            {Users.map((user) => (
              <SideBarFriendList key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
