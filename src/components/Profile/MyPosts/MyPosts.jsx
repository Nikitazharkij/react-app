import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((post) => {
        return <Post message={post.message} likesCount={post.likesCount} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return (
        <div className="myPosts">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;