import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.jpg';

const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} alt={"logo"} />
            <div className="loginBlock">
                {props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;