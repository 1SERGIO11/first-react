import React from "react"
import classes from "./Dialogs.module.css"


const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Marina
                </div>
                <div className={classes.dialog}>
                    Artyom
                </div>
                <div className={classes.dialog}>
                    Danya
                </div>
                <div className={classes.dialog}>
                    Ilya
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>Hi! Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;