import SideBar from "@/Components/SideBar/SideBar";
import styles from "./page.module.css";
import Feed from "@/Components/Feed/Feed";
import RightBar from "@/Components/RightBar/RightBar";

export default function Home() {
  return (
    <>
      <div className={styles.HomeContainer}>
        {/* For SideBar */}
        <SideBar />

        {/* For Feed */}
        <Feed />
        {/* For RightBar */}
        <RightBar />
      </div>
    </>
  );
}
