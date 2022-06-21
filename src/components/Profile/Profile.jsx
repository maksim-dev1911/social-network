import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Friends from "../friends/friends";

const Profile = (props) => {
    return <main className={classes.main_content}>
        <div className={classes.my_profile}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         savePhoto={props.savePhoto}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
            {/*<Friends friends={props.friends}/>*/}
        </div>
    </main>
}

export default Profile;