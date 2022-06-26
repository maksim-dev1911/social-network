import React from "react";
import classes from "./About.module.css"

const About = (props) => {

    return (
        <div className={classes.about}>
            <div className={classes.aboutMe}><h4 className={classes.text_About}>About</h4>{props.profile.aboutMe ||
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</div>}</div>
        </div>
    )
}

export default About;