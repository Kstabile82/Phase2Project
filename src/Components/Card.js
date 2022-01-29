import React, { useState } from "react";

function Card({ exercise }) {
    const [isHidden, setIsHidden] = useState(true);
    function handleClick(e) {
        setIsHidden(false);
        // e.target.parentElement.parentElement.remove();
    }
 return (
    <div style={{display: isHidden ? 'visible' : 'none' }}>
         <p>{exercise.name}</p>
         <p>{exercise.difficulty}</p>
         <p>{exercise.likes}</p>
         <button onClick={handleClick}>close</button>
     </div>
 )
}
export default Card;