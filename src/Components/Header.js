import React from "react";
import LogIn from "./LogIn";
import { NavLink } from "react-router-dom";

function Header() {
        return (
            <header style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}> 
                <h1>
                </h1>
                <nav className="navbar">
                    <NavLink exact to="/" className="Home">Home        </NavLink>
                    <NavLink to="/LogIn" className="Login">          Log In</NavLink>
                </nav>
            </header>
        );
    }
    export default Header;