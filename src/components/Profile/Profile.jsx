import React from "react";
import image from './image.jpg';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src={image} alt="image" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;