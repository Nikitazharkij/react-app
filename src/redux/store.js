import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hi, how are you?", likesCount: 12 },
                { id: "2", message: "It's my first post", likesCount: 11 },
                { id: "3", message: "Blablabla", likesCount: 11 },
                { id: "4", message: "Dada", likesCount: 11 }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                { id: "1", name: "Dimych" },
                { id: "2", name: "Sveta" },
                { id: "3", name: "Sasha" },
                { id: "4", name: "Viktor" },
                { id: "5", name: "Valera" },
                { id: "6", name: "Uyra" }
            ],
            messages: [
                { id: "1", message: "Hi" },
                { id: "2", message: "How is your things?" },
                { id: "3", message: "Yo!" },
                { id: "4", message: "What's up?" },
                { id: "5", message: "How old are you?" }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
