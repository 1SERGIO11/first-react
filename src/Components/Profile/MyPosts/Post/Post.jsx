import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig" alt="" />
      {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  )
}
export default Post;