import React, { useState } from "react";
import Dashboard from "./Dashboard";
//problem here. i dont want to replace the workout, i just want to add to the list and include title. 
//how do i do that since its a nested object in json? 

function SaveNewWorkout({ exerciseList, user, exercises }) {
    const [workouts, setWorkouts] = useState([])
    const [saved, setSaved] = useState(false);
    let success = "Your workout was saved!"
    let workoutArr = [];
   exerciseList.filter(ex => {
     exercises.map(exercise => {
         if (exercise.name === ex.key) {
             workoutArr.push(exercise)
         }
 })
})

    function handleSave(e) {
       let workoutName = e.target.parentElement.firstChild.value;
       let workout = workoutArr;
        fetch (`http://localhost:3000/users/${user.id}`, {
                        method: "PATCH",
                        headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                       workouts: [ {
                            "title": workoutName,
                            "workout": workout,
                          }
                        ],
                    }),
                })
                .then((r) => r.json())
                .then((workout) => setWorkouts([...workouts, workout]))
                setSaved(true);
    }
    return (
        <div>
                When your workout is complete, save it here:  
                    <input type="text" id="workoutname" placeholder="Workout Name">
                    </input>
               
                <button onClick={handleSave}>Submit </button>   
                {saved === true ? <Dashboard theText={success} /> : null} 
        </div>
    )
}
export default SaveNewWorkout;