import React from "react"
import classes from "./FriendsItem.module.css"
import userPhoto from "../../../../../../assets/images/user.png"
import {Grid} from "@mui/material";

const FriendsItem = ({user, unfollow}) => {

    return <Grid item sm='4'>
        <div className={classes.friendsItem}>
            <div>
                <img className={classes.avatar}
                     src={user.photos.small != null ? user.photos.small : userPhoto}/>
                <p className={classes.userName}>{user.name}</p>
                <div>
                    <div
                        className={classes.btnUnFollow}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >UNFOLLOW
                    </div>
                </div>
            </div>
        </div>
    </Grid>
}

export default FriendsItem;