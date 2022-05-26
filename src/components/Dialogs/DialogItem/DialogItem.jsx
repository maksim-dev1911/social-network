import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;

    return <div className={classes.dialog}>
        <img src=""/>
        <NavLink to={path}
                 className={navData => navData.isActive ? classes.dialog : classes.active}>{props.name}</NavLink>
    </div>
}

export default DialogItem;