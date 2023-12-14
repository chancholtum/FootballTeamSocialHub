import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <>
      <div className={styles.NavbarContainer}>
        <div className={styles.NavbarLeftSide}>
          <Link href="/#" className={styles.Link}>
            <p className={styles.Logo}>Logo</p>
          </Link>
        </div>

        {/* center */}
        <div className={styles.NavbarCenter}>
          <div className={styles.SearchBar}>
            <SearchIcon className={styles.SearchIcon} />
            <input
              type="text"
              placeholder="Search your friends"
              className={styles.SearchInputBox}
            />
          </div>
        </div>

        {/* right */}
        <div className={styles.NavbarRightSide}>
          <div className={styles.NavbarLinks}>
            <Link href="/">
              <span className={styles.NavbarLink}>Home</span>
            </Link>
            <Link href="/">
              <span className={styles.NavbarLink}>Login</span>
            </Link>
          </div>

          <div className={styles.NavbarIcons}>
            <div className={styles.NavbarIconItem}>
              <PersonIcon />
              <span className={styles.NavbarIconBadge}>7</span>
            </div>
            <Link href="/Chat">
              <div className={styles.NavbarIconItem}>
                <ChatBubbleIcon />
                <span className={styles.NavbarIconBadge}>4</span>
              </div>
            </Link>
            <div className={styles.NavbarIconItem}>
              <NotificationsIcon />
              <span className={styles.NavbarIconBadge}>8</span>
            </div>
          </div>
          <Link href="/Profile">
            <Image
              src="/assets/logo.jpg"
              width={35}
              height={35}
              className={styles.NavbarUserImg}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
