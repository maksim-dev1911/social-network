import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import TabPanel from "../common/tabs/Tabs";

const Profile = (props) => {

    return <main className={classes.main_content}>
        <div className={classes.my_profile}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         savePhoto={props.savePhoto}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <div>
                <TabPanel unfollow={props.unfollow} users={props.users} profile={props.profile}/>
            </div>
            {/*<MyPostsContainer store={props.store}/>*/}
        </div>
    </main>
}

export default Profile;