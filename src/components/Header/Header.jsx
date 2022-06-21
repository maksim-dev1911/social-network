import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const Header = ({profile,isAuth, login, logout }) => {

    return (
        <div className={classes.header_container}>
            <header className={classes.header}>
                <div>
                    <NavLink to={'/profile'}>
                        <img className={classes.img_logo}
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png'/>
                    </NavLink>
                </div>
                <div className={classes.profiles}>
                    <div className={classes.login_block}>
                        {isAuth
                            ? <div> {login} <button onClick={logout}>Log out</button> </div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    <NavLink  to={'/profile'}>
                        <img className={classes.profile_img}
                             src={profile?.photos?.large || userPhoto}/>
                    </NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header;