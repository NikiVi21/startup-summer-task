import React from "react";
import { useSelector } from "react-redux";
import style from "./Profile.module.css";
import followersPhoto from "../assets/followers.svg";
import followingPhoto from "../assets/following.svg";

const Profile = (props) => {
  const photo = useSelector((state) => state.profilePage.photo);
  const name = useSelector((state) => state.profilePage.name);
  const login = useSelector((state) => state.profilePage.login);
  const followers = useSelector((state) => state.profilePage.followers);
  const following = useSelector((state) => state.profilePage.following);
  const html_url = useSelector((state) => state.profilePage.html_url);

  return (
    <div className={style.profileWrapper}>
      <div>
        <img className={style.profilePhoto} src={photo} alt="" />
      </div>
      <div className={style.profileName}>{name}</div>
      <div>
        <a
          className={style.login}
          rel="noreferrer"
          target="_blank"
          href={html_url}
        >
          {login}
        </a>
      </div>
      <div className={style.follow}>
        <div className={style.followers}>
          <img src={followersPhoto} alt="" />
          {followers} followers
        </div>
        <div className={style.following}>
          <img src={followingPhoto} alt="" />
          {following} following
        </div>
      </div>
    </div>
  );
};

export default Profile;
