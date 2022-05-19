import React from "react";
import classes from "./Users.module.css";
import Pagination from '@mui/material/Pagination';
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    const handlePageChanged = (_,page) => {
        onPageChanged(page);
    }

    return <main className={classes.main_content}>
        {users.map(user => {
            return (<User user={user}
                          followingInProgress={props.followingInProgress}
                          unfollow={props.unfollow}
                          follow={props.follow}
                          key={user.id}/>)
        })}
        <Pagination color="primary" page={currentPage} onChange={handlePageChanged} count={Math.ceil(totalUsersCount / pageSize)} />
    </main>
}

export default React.memo(Users);