import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Sergey" },
        { id: 2, name: "Dimych" },
        { id: 3, name: "Marina" },
        { id: 4, name: "Artyom" },
        { id: 5, name: "Ilya" },
        { id: 6, name: "Vlad" }
    ]
    let dialogsElements =  dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />,)
    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Hi! Yo" },
        { id: 4, message: "Hi! Yo" },
        { id: 5, message: "Hi! Yo" },
        { id: 6, message: "Hi! Yo" }
    ]
    let messagesElements = messages.map((m) => <Message message={m.message} />)
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
}
export default Dialogs;