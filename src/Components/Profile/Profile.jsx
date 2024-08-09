import React from 'react';
import classes from "./Profile.module.css";

const Profile = () => {
  return (<div className={classes.content}>
    <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'></img>
    <div>Ava + description</div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className='posts'>
        <div className={classes.item}>
          Post 1
        </div>
        <div className={classes.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>)
}
export default Profile;