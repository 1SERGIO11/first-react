import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 10},
]
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts = {posts}/>
    </div>)
}
export default Profile;