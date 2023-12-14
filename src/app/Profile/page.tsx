import SideBar from "@/Components/SideBar/SideBar";
import styles from "./Profile.module.css";
import Image from "next/image";
import Feed from "@/Components/Feed/Feed";
import RightBar from "@/Components/RightBar/RightBar";

function Profile() {
  return (
    <>
      <div className={styles.Profile}>
        <SideBar />
        <div className={styles.ProfileRightSide}>
          <div className={styles.ProfileRightTop}>
            <div className={styles.ProfileCV}>
              <Image
                src="/assets/Posts/6.webp"
                className={styles.ProfileCVImg}
                alt="post"
                width={3000}
                height={280}
              />
              <Image
                src="/assets/logo.jpg"
                className={styles.ProfileUserImg}
                alt="post"
                width={100}
                height={280}
              />
            </div>
            <div className={styles.ProfileInfo}>
              <h2 className={styles.ProfileInfoName}>Manchester United Team</h2>
              <span className={styles.ProfileInfoDesc}>
                Glory Glory Man United
              </span>
            </div>
          </div>

          <div className={styles.ProfileRightBottom}>
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
