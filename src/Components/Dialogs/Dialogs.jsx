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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Sergey" id="1" />
                <DialogItem name="Dimych" id="2" />
                <DialogItem name="Marina" id="3" />
                <DialogItem name="Artyom" id="4" />
                <DialogItem name="Ilya" id="5" />
                <DialogItem name="Vlad" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Yo" />
                <Message message="Hi! Yo" />
                <Message message="Hi! Yo" />
                <Message message="Hi! Yo" />
            </div>
        </div>
    )
}
export default Dialogs;