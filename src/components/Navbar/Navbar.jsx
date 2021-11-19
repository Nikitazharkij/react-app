import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="item">
                <NavLink to="/">Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to="/dialogs/">Messages</NavLink>
            </div>
            <div className="item">
                <NavLink to="/news/">News</NavLink>
            </div>
            <div className="item">
                <NavLink to="/music/">Music</NavLink>
            </div>
            <div className="item">
                <NavLink to="/settings/" a>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;