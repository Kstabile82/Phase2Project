import React from "react";
import Userpage from "./Userpage";
import { NavLink } from "react-router-dom";

function Header() {
        return (
            <header>
                <h1>Get Fit!
                </h1>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/Userpage">Log In</NavLink>
                </nav>
            </header>
        );
    }
    export default Header;