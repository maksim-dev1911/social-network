import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const HOME_ICON_SRC = 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png'

const Navbar = () => {

    return <aside className={classes.aside}>
        <div className={classes.side_children}>
            <div>
                <nav className={classes.nav}>
                    <ul>
                        <li className={classes.item}>
                            <div>
                                <img
                                    className={classes.home}
                                    src={HOME_ICON_SRC}
                                />
                            </div>
                            <NavLink
                                activeClassName={classes.active}
                                to="/profile"
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className={classes.item}>
                            <div>
                                <img className={classes.home}
                                     src='https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-13.png'/>
                            </div>
                            <NavLink activeClassName={classes.active} to="/dialogs"
                            >Messages</NavLink>
                        </li>
                        <li className={classes.item}>
                            <div>
                                <img className={classes.home}
                                     src='https://www.pinclipart.com/picdir/big/150-1503030_iconoequipo-intercom-chat-icon-svg-clipart.png'/>
                            </div>
                            <NavLink activeClassName={classes.active} to="/users"
                            >People</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
}

export default Navbar;