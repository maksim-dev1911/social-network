import React from "react";
import classes from './ProfileInfo.module.css';
import PreloaderTwo from "../../common/Preloader/preloader-2";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <PreloaderTwo/>
    }

    return <main className={classes.main_content}>
        <div className={classes.my_profile}>
            <div className={classes.profile_banner}>
                <img className={classes.background_profile}
                     src='https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png'/>
                <div className={classes.avatar_container}>
                    <img className={classes.photos} src={profile.photos.large}/>
                </div>
                <div className={classes.name_profile}>
                    <h1>{profile.fullName}</h1>
                </div>
            </div>
            <div>
                <div>
                    <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
                </div>
                <div className={classes.text_aboutMe}>
                    About me
                </div>
                <div className={classes.aboutMe}>
                    {profile.aboutMe}
                </div>
            </div>
        </div>
    </main>
}

export default ProfileInfo;