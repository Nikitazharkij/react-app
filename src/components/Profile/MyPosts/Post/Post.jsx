import React from "react";
import img from "../../../../img/avatarMessage.jpg"

const Post = (props) => {
    return (
        <div className="item">
            <img src={img} alt="tractor" />
            <span>{props.message}</span>
        </div>
    );
}

export default Post;