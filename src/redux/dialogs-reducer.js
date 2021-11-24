const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Viktor" },
        { id: 5, name: "Valera" },
        { id: 6, name: "Uyra" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your things?" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "What's up?" },
        { id: 5, message: "How old are you?" }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 6, message: body }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
};

export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
};

export default dialogsReducer;