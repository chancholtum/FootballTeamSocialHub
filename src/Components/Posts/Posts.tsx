import styles from "./Posts.module.css";
import Image from "next/image";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Link from "next/link";
import { Users } from "@/Data";

function Posts({ post }) {
  return (
    <>
      <div className={styles.MainPost}>
        <div className={styles.PostWrap}>
          {/* Post Top */}
          <div className={styles.PostTop}>
            <div className={styles.PostTopLeft}>
              <Image
                src={
                  Users.filter((user) => user.id === post?.userId)[0]
                    .ProfilePicture
                }
                height={36}
                width={36}
                alt="logo"
                className={styles.PostProfileUrl}
              />
              <span className={styles.PostUserName}>
                {Users.filter((user) => user.id === post?.userId)[0].UserName}
              </span>
              <span className={styles.PostDate}>{post.date}</span>
            </div>
          </div>
          {/* Post Center */}

          <div className={styles.PostCenter}>
            <span className={styles.PostDesc}>{post?.desc}</span>
            <Image
              src={post?.Imgurl}
              height={500}
              width={500}
              alt="logo"
              className={styles.PostImg}
            />
          </div>
          {/* Post Bottom */}

          <div className={styles.PostBottom}>
            <div className={styles.PostBottomLeft}>
              <ThumbUpIcon className={styles.LikeIcon} htmlColor="blue" />
              <FavoriteIcon className={styles.LikeIcon} htmlColor="red" />
              <TagFacesIcon className={styles.LikeIcon} htmlColor="pink" />
              <span className={styles.LikeCounter}>
                {post.like} People Like It
              </span>
            </div>
            <div className={styles.PostBottomRight}>
              <span className={styles.PostComment}>
                {post.comment} Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
