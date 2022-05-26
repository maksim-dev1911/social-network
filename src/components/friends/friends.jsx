import React from "react";
import classes from "./friends.module.css"
import FriendsItem from "./FriendsItem/friendsItem";


const Friends = (props) => {
    const friendsElements = props.friends.map(friends => <FriendsItem name={friends.name} id={friends.id}/>)

    return <div className={classes.friends}>
        <div>
            <h1>Friends</h1>
            <div className={classes.number_people}>
                3 friends
            </div>
        </div>
        <div className={classes.people_container}>
            <div className={classes.people}>
            {friendsElements}
            </div>
        </div>
    </div>
}

export default Friends;