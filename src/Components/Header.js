import React, { useState, useEffect } from "react";
import Userpage from "./Userpage";
import ExerciseContainer from "./ExerciseContainer";
import NewUser from "./NewUser";


function Header() {
const [nextPage, setNextPage] = useState("");
const [exercises, setExercises] = useState([]);
useEffect(() => {
    fetch("http://localhost:3000/exercises")
    .then((r) => r.json())
    .then((currentExercises) => {
        setExercises(currentExercises);
    });
 },[]);
    function handleChange(e) {
            if (e.target.id === "login") {
                setNextPage("userpage")
            }
            else if (e.target.id === "browse") {
                setNextPage("browse")
            }
            else {
                setNextPage("newuser") 
            }
    }
    return (
        <header>
            <h1>Get Fit!
            </h1>
            <form onSubmit={handleChange}>
                <div className="radio">
                    <label>
                        <input type="radio" id="login" name="selection" onChange={handleChange}></input>
                    Log In </label>
                    <label>
                        <input type="radio" id="newuser" name="selection" onChange={handleChange}></input>
                    Create New User </label>
                    <label>
                        <input type="radio" id="browse" name="selection" onChange={handleChange}></input>
                    Browse </label>
                </div>
            </form>
                <div >{(nextPage) === "userpage" ? <Userpage exercises={exercises} /> : null }</div>
                <div> {(nextPage) === "newuser" ? <NewUser exercises={exercises} /> : null }</div>
                <div >{(nextPage) === "browse" ? <ExerciseContainer exercises={exercises}/> : null }</div>
        </header>
    );
}
export default Header;