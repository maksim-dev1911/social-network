import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
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
                        {props.isAuth
                            ? <div> {props.login} <button onClick={props.logout}>Log out</button> </div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    <NavLink to={'/profile'}>
                        <img className={classes.profile_img}
                             src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAgMAAAD90d5fAAAACVBMVEXr6+ssPlA2R1nMBliUAAADw0lEQVR42u2cQa7cIBBETSSOwH04Qi+o+2WdU0bJV9SR5s8MjSm7YfqtkZ6bsrGNDUcQBEEQBEEQBEEQBEEQBEEQPCXji3rwKPiHHArJoRaGg25JUDQXkkMtRIcyXVLwiBALUYiFKEIsRCEWogixEIVQCLUUgF9KxnMqr7eURoxdIfQWLXq8pBF7SyH0Fqm/AH5/JbyD0FuU67EA/FDwHmIkSuVFoggvEqURI1GIkSiVF4kipyPhh4ILJAl9ECNR6slI+MkD/FASevEuyQA/+YJe5JSEnzwukCT0c0bCTz5fISnoR05I+MnjAkmCBc+SDAvVsaTAggxL+KcXdpEk2PArybBRt5HIiKRsI4GR5lWSYOWjJRlW6jYS+WRJCYkFmGkh4Q5eKSRbSOrnSnJIQuJKIiEJSUhCsuDYFZKQhCQkK74EfbDkcCrZZ27Fq6T4lHidg9xn8tnpBwGvkn0+N9klXr8z2iVuv/2aJW6/x1/yZ0HyKPH7S8k+v/kcxZ9ExiTZn6Q6/nvQJvH8R+dRvEnE9f/CyZvkGMaZpDlfIXDJWofkS+J9JU138uJ+dVNvKP5XnHWG0hZYBZj6cl9gZWZXKG2J1bKpJ5IlVjB3hCKLrCp/H8oqK/3f9pcss/uCYR8J2kksC+3tceAFban9Vl6VstgeOM+jX21foo4dlniltAV3vToy8RpRnnfWYnuqPWYvBwNmZymvHSvtPfj/LopBcA7DSZTq8Pkq/W3boARohrZ1+MIzDNFjpVhGjzw4CmTLMDg6ZFoGqaRtR4ZCMYzObfjeYWlcR+/o1XADkNHbUzNUjeE7raFqVGvs/aUUbTv8+GN5IBt+kBPSrsMZ/2M4oDa+XbGh7fjDteERuQ6/Jkh3IWjjr1W1/7XlxKvI/PeJhAekt2bImTe33pbNHonSPR1ij0RpvUdT7ZEobeo+0Bl9lq5m9imhiXM6XTNouaORMRKlvW8j9kjsNEMk4xgiGafaI7EjvEiMzzf8UIALQgH4oSSqRHPnJ18AfvKYQr1fkjAF4eWuNGLuyv0SgJ98wiTEIKEkn6kSzZ2fPKZR75UkTEMMEkLy+QpJwTzulWAi9U5JwkSEd3Ip7U5JwUzulGAq9T5JwlSkQ0I6vfKCEnwrKdtIMJl6lyRhMnKXJGMy7S5JwWz2kdRHCdaUyD2StKikPUjyNpKC+WwsAYF6hySBgITkzNWYAawpwR2SAgAh6b3k8YeQdEoSKEhIxiUZFFpITHw3dIXkAyR1Twm+CMlTZEtJwhch6ZL8+EXi5/GX3/7KyzZmCAVwAAAAAElFTkSuQmCC'/>
                    </NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header;