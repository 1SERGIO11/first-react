import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import classes from "./Dialogs.module.css"


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsElements =  props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />,)

    let messagesElements = props.messages.map((m) => <Message message={m.message} />)
    
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