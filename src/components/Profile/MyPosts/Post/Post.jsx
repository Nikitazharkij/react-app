import React from "react";
import img from "./img.jpg"

const Post = (props) => {
    return (
        <div className="item">
            <img src={img} />
            <span>{props.message}</span>
        </div>
    );
}

export default Post;