import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import PreloaderTwo from "../../common/Preloader/preloader-2";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {Modal, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TabPanel from "../../common/tabs/Tabs";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    if (!profile) {
        return <PreloaderTwo/>
    }

    return <main className={classes.main_content}>
        <div className={classes.my_profile}>
            <div className={classes.profile_banner}>
                <img className={classes.background_profile}
                     src='http://sociala.uitheme.net/assets/images/u-bg.jpg'/>
                <div className={classes.avatar_container}>
                    <img className={classes.photos} src={profile.photos.large || userPhoto}/>
                    {isOwner && <button className={classes.button_Edit} onClick={handleOpen}>Edit</button>}
                </div>
                <div className={classes.name_profile}>
                    <h1>{profile.fullName}</h1>
                </div>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                <button className={classes.close_button} onClick={handleClose}>Close</button>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
            <div>
                <div>
                    {/*<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>*/}
                </div>
                <div className={classes.border_bottom}></div>
            </div>
        </div>
    </main>
}

export default ProfileInfo;