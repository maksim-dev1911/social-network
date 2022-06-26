import React from "react";
import classes from "./Friends.module.css"
import FriendsItem from "./friendsItem/FriendsItem";
import {Grid} from "@mui/material";

const Friends = ({users, unfollow}) => {

    return <div className={classes.friends}>
        <div>
            <h1>Friends</h1>
        </div>
        <div >
            <Grid container spacing='15'>
                {users.map(user => {
                    return (<FriendsItem unfollow={unfollow} user={user}/>)
                })}
            </Grid>
        </div>
    </div>
}

export default Friends;