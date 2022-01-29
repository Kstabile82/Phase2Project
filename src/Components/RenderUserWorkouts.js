import React, { useState } from "react";
import Card from "./Card";

function RenderUserWorkouts({ user }) {
    const [clickedEx, setClickedEx] = useState({})
    const [clickedWorkout, setClickedWorkout] = useState("")
    let userworkout = user.workouts.map(wkt => {
        return (
            <div><ul>{wkt.title}
        {wkt.workout.map(ex => {
            return (
                <div className={wkt.title}>
                    <li key={ex.id} onClick={(e) => handleEx(e, ex)}>{ex.name}</li>
                    <div key={ex.name}>{(clickedEx.name) === ex.name && clickedWorkout === wkt.title ? <Card exercise={clickedEx} workout={clickedWorkout} /> : null }</div>
                </div>
            )
        })}
        </ul></div>
        )
    })
       function handleEx(e, ex) {
            setClickedEx(ex);
            setClickedWorkout(e.target.parentElement.className)  
        }
        console.log(clickedWorkout)

    return (
        <div>{userworkout}</div>
    )
}

export default RenderUserWorkouts;

    // let exerciseList = addedExercises.map(addedEx => 
    //     <li key={addedEx} name={addedEx}>{addedEx} 
    //     <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
    //     </li> 
    // )
    // let userworkouts = user.workouts.map(workout => {
    //     return (
    //         <ul key={workout.title} name={workout.id}>
    //             {workout.title}
    //                 {workout.exercises.map(exercise => {
    //                         return (
    //                             <div className={workout.title}>
    //                                 <li key={exercise.id} onClick={(e) => handleEx(e, exercise)}>{exercise.name}</li>
    //                                 <div key={exercise.id+1}>{(clickedEx.name) === exercise.name && clickedWorkout === workout.title ? <Card exercise={clickedEx} workout={clickedWorkout} /> : null } </div>
    //                             </div>
    //                             )
                            
    //                     })
                    
    //                 }   
    //             </ul>
    //     )
    //     })
        // function handleEx(e, exercise) {
        //     setClickedEx(exercise);
        //     setClickedWorkout(e.target.parentElement.className)
            
        // }

//  return (
//         <div>
//             {/* {userworkouts} */}
//         </div>
//     )