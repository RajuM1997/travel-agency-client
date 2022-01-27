import React from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="pt-5 pb-2 user mx-auto text-center">
      <div className="user_img">
        <img
          className="mx-auto pb-1"
          src={
            !user.photoURL
              ? `https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg`
              : user.photoURL
          }
          alt=""
        />
      </div>
      <div className="details d-flex flex-column">
        <small>Name: {user.displayName}</small>
        <small>Email: {user.email}</small>
        <small>
          <button className="logOut_btn">Edit Profile</button>
        </small>
      </div>
    </div>
  );
};

export default Profile;
