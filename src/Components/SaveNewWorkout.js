import React, { useState } from "react";

function SaveNewWorkout({ exerciseList, user, exercises }) {
    const [workouts, setWorkouts] = useState([])
    const [saved, setSaved] = useState(false);
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
                        "workouts": {
                            title: workoutName,
                            workout: workout,
                        }
                    }),
                })
                .then((r) => r.json())
                .then((workout) => setWorkouts([...workouts, workout]))
                setSaved(true);
    }
    return (
        <div>
                <label>Save As: 
                    <input type="text" id="workoutname" placeholder="Workout Name"
></input>
                </label>
                <button onClick={handleSave}>Submit</button>   
        </div>
    )
}
export default SaveNewWorkout;