import React, { useState } from "react";

function Card({ exercise, workout }) {
    const [isHidden, setIsHidden] = useState(true);
    function handleClick(e) {
        setIsHidden(false);
        e.target.parentElement.parentElement.remove();
    }
 return (
     <div style={{visibility: isHidden ? 'visible' : 'hidden' }}>
         <p>{exercise.name}</p>
         <p>{exercise.difficulty}</p>
         <p>{exercise.likes}</p>
         <button onClick={handleClick}>close</button>
     </div>
 )
}
export default Card;