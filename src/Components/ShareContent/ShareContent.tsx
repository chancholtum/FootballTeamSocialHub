import styles from "./ShareContent.module.css";
import Image from "next/image";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function ShareContent() {
  return (
    <>
      <div className={styles.ShareMain}>
        <div className={styles.ShareWrap}>
          <div className={styles.ShareTop}>
            <Image
              src="/assets/logo.jpg"
              height={50}
              width={50}
              alt="logo"
              className={styles.ShareImgProfile}
            />
            <input
              type="text"
              placeholder="What are you thinking ?"
              className={styles.ShareInputBox}
            />
          </div>
          <div className={styles.ShareBottomLine}></div>
          <div className={styles.ShareBottom}>
            <div className={styles.ShareOptions}>
              <div className={styles.ShareOptionContent}>
                <PhotoLibraryIcon
                  htmlColor="blue"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Photos & Video</span>
              </div>
              <div className={styles.ShareOptionContent}>
                <LabelIcon htmlColor="red" className={styles.ShareIcon} />
                <span className={styles.ShareOptText}>Tag</span>
              </div>
              <div className={styles.ShareOptionContent}>
                <LocationOnIcon
                  htmlColor="orange"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Location</span>
              </div>
              <div className={styles.ShareOptionContent}>
                <InsertEmoticonIcon
                  htmlColor="pink"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Mood</span>
              </div>
            </div>
            <button className={styles.Btn}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareContent;
