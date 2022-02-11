import React, { useState } from "react";
// import About from "./About";
// import LogIn from "./LogIn";
import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

function Header() {
    // const [exercises, setExercises] = useState([]);
//   const [hasWorkouts, setHasWorkouts] = useState(true);

//   const [nextStep, setNextStep] = useState("");
//   let history = useHistory(); 
    // useEffect(() => {
    //     fetch("http://localhost:3000/exercises")
    //     .then((r) => r.json())
    //     .then((currentExercises) => {
    //         setExercises(currentExercises);
    //      });
    // },[]);
        return (
            <header style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}> 
                <h1>
                </h1>
                <nav className="navbar">
                    <NavLink exact to="/Home" className="Home">Home        </NavLink>
                    <NavLink to="/LogIn" className="Login">          Log In</NavLink>
                    <NavLink to="/About" className="About">          About</NavLink>
                    <NavLink to="/Browse" className="Browse">        Try It Out</NavLink>

                </nav>
            </header>
        );
    }
    export default Header;