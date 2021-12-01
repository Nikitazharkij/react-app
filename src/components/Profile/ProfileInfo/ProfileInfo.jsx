import React from "react";
import image from '../../../img/auto.jpg';
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profileInfo">
            <div>
                <img src={image} alt="auto" />
            </div>
            <div className="description">
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"Hello my friends"} />
            </div>
        </div>
    )
}

export default ProfileInfo;