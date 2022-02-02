import React, { useState } from "react";

function Card({ exercise }) {
    const [isHidden, setIsHidden] = useState(true);
    function handleClick(e) {
        setIsHidden(false);
    }
 return (
    <div className="card" style={{display: isHidden ? 'visible' : 'none' }}>
         <p>Name: {exercise.name}</p>
         <p>Category: {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}</p>
         <p>Difficulty: {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}</p>
         <p>Likes: {exercise.likes}</p>
         <button onClick={handleClick}>close</button>
     </div>
 )
}
export default Card;