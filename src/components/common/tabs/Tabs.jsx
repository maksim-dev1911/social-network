import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {NavLink} from "react-router-dom";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import About from "./LinkTab/about/About";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import Friends from "./LinkTab/friends/Friends";

function LinkTab(props) {

    return (
        <Tab
            component={NavLink}
            {...props}
        />
    );
}

export default function NavTabs(props) {
    const location = useLocation()

    if(!props.profile) {
        return null
    }
    return (
        <div>
            <Box sx={{width: '100%', background: '#ffffff', marginTop: '5px'}}>
                <Tabs value={location.pathname} aria-label="nav tabs example">
                    <LinkTab value={`/profile/${props.profile.userId}/about`} label="About"
                             to={`/profile/${props.profile.userId}/about`}/>
                    <LinkTab value={`/profile/${props.profile.userId}/friends`} label="Friends"
                             to={`/profile/${props.profile.userId}/friends`}/>
                </Tabs>
            </Box>
            <div>
                <Switch>
                    <Route  path="/profile/:userId?/about"
                render={() => <About profile={props.profile}/>}/>
                    <Route  path="/profile/:userId?/friends"
                            render={() => <Friends unfollow={props.unfollow} users={props.users}/>}/>
                </Switch>
            </div>
        </div>
    );
}
