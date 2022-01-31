import React from "react";
import LogIn from "./LogIn";
import { NavLink } from "react-router-dom";

function Header() {
        return (
            <header>
                <h1>Get Fit!
                </h1>
                <nav>
                    <NavLink exact to="/">Home   </NavLink>
                    <NavLink to="/LogIn">   Log In</NavLink>
                </nav>
            </header>
        );
    }
    export default Header;