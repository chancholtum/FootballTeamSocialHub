import Posts from "../Posts/Posts";
import ShareContent from "../ShareContent/ShareContent";
import styles from "./Feed.module.css";

import { PostsCustom } from "../../Data";

function Feed() {
  return (
    <>
      <div className={styles.Feed}>
        <div className={styles.FeedWrap}>
          <ShareContent />

          {/* Posts */}
          {PostsCustom.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
