import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="item">
                <NavLink to="/profile/">Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to="/dialogs/">Dialogs</NavLink>
            </div>
            <div className="item">
                <NavLink to="/users/">Users</NavLink>
            </div>
            <div className="item">
                <NavLink to="/news/">News</NavLink>
            </div>
            <div className="item">
                <NavLink to="/settings/">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;