import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <aside className={classes.aside}>
        <div className={classes.side_children}>
            <div>
                <nav className={classes.nav}>
                    <ul>
                        <li className={classes.item}>
                            <div>
                                <img className={classes.home}
                                     src='https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png'/>
                            </div>
                            <NavLink to="/profile"
                                     activeClassName={classes.active}>Profile</NavLink>
                        </li>
                        <li className={classes.item}>
                            <div>
                                <img className={classes.home}
                                     src='https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-13.png'/>
                            </div>
                            <NavLink to="/dialogs"
                                     activeClassName={classes.active}>Messages</NavLink>
                        </li>
                        <li className={classes.item}>
                            <div>
                                <img className={classes.home}
                                     src='https://www.pinclipart.com/picdir/big/150-1503030_iconoequipo-intercom-chat-icon-svg-clipart.png'/>
                            </div>
                            <NavLink to="/users"
                                     activeClassName={classes.active}>People</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
}

export default Navbar;