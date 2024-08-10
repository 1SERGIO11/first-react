import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";

const Profile = () => {
  return (<div className={classes.content}>
    <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'></img>
    <div>Ava + description</div>
    <MyPosts/>
  </div>)
}
export default Profile;