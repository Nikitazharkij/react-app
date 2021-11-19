import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => {
        return < DialogItem name={dialog.name} id={dialog.id} />
    })

    let messagesElements = props.state.messages.map((item) => {
        return <Message message={item.message} />
    })

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;