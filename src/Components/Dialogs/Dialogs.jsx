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
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Hi! Yo" },
        { id: 4, message: "Hi! Yo" },
        { id: 5, message: "Hi! Yo" },
        { id: 6, message: "Hi! Yo" }
    ]
    
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}
export default Dialogs;