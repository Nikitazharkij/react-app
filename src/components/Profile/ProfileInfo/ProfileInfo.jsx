import React from "react";
import image from '../image.jpg';

const ProfileInfo = () => {
    return (
        <div className="profileInfo">
            <div>
                <img src={image} alt="image" />
            </div>
            <div className="description">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;