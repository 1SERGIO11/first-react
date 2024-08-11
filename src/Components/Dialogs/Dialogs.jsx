import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"


const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to ="/dialogs/1">Sergey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to ="/dialogs/2">Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to ="/dialogs/3">Marina</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to ="/dialogs/4">Artyom</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to ="/dialogs/5">Ilya</NavLink>  
                </div>
                <div className={classes.dialog}>
                    <NavLink to ="/dialogs/6">Vlad</NavLink>
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