import React from "react";
import image from '../../../img/auto.jpg';

const ProfileInfo = () => {
    return (
        <div className="profileInfo">
            <div>
                <img src={image} alt="auto" />
            </div>
            <div className="description">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;