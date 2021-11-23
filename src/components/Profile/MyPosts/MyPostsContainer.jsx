import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profileReducer.posts}
                            newPostText={state.profileReducer.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>

    );
}

export default MyPostsContainer;