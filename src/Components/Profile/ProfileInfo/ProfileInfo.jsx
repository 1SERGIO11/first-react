import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'></img>
      </div>
      <div className={classes.descriptionBlock}>
        Ava + description
      </div>
    </div>)
}
export default ProfileInfo;