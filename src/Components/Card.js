import React, { useState } from "react";

function Card({ exercise }) {
    const [isHidden, setIsHidden] = useState(true);
    function handleClick(e) {
        setIsHidden(false);
    }
 return (
    <div style={{display: isHidden ? 'visible' : 'none' }}>
         <p>Name: {exercise.name}</p>
         <p>Category: {exercise.category}</p>
         <p>Difficulty: {exercise.difficulty}</p>
         <p>Likes: {exercise.likes}</p>
         <button onClick={handleClick}>close</button>
     </div>
 )
}
export default Card;