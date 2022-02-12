import React, { useState } from "react";
import LikeBtn from "./LikeBtn";

//fix card so it reopens if clicked right after closing, toggle isShowing somehow
function Card({ exercise }) {
    const [isShowing, setIsShowing] = useState(true);
    const card = {
        display: isShowing ? "visible" : "none",
        backgroundColor: "white",
        border: "dotted", 
        font: "red"
    }
    function handleClick(e) {
        e.preventDefault();
        setIsShowing(false);
    }
 return (
    // <div className="card" id={exercise.name} style={{display: isShowing ? 'visible' : 'none'}}>
    <div className="card" id={exercise.name} style={card}>
         <p>Name: {exercise.name}</p>
         <p>Category: {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}</p>
         <p>Difficulty: {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}</p>
         <LikeBtn match={exercise} />
         <button onClick={handleClick}>close</button>
     </div>
 )
}
export default Card;