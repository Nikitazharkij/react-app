import rerenderEntireTree from "../render";

let state = {
    profilePage: {
        posts: [
            { id: "1", message: "Hi, how are you?", likesCount: 12 },
            { id: "2", message: "It's my first post", likesCount: 11 },
            { id: "3", message: "Blablabla", likesCount: 11 },
            { id: "4", message: "Dada", likesCount: 11 }
        ]
    },
    dialogsPage: {
        messages: [
            { id: "1", message: "Hi" },
            { id: "2", message: "How is your things?" },
            { id: "3", message: "Yo!" },
            { id: "4", message: "What's up?" },
            { id: "5", message: "How old are you?" }
        ],
        dialogs: [
            { id: "1", name: "Dimych" },
            { id: "2", name: "Sveta" },
            { id: "3", name: "Sasha" },
            { id: "4", name: "Viktor" },
            { id: "5", name: "Valera" }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

}

export default state;
