import React, { useState, useEffect } from "react"; 
import ExerciseForm from "./ExerciseForm";
import AddNewExercise from "./AddNewExercise";
import SearchExercises from "./SearchExercises";

function ExerciseContainer({ user }) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((r) => r.json())
        .then((currentExercises) => {
            setExercises(currentExercises);
         });
    },[exercises]);
    return (
        <div>
            <ExerciseForm 
            exercises={exercises} 
            user={user}
            />
            <SearchExercises user={user} exercises={exercises}  />
            <AddNewExercise user={user} exercises={exercises} setExercises={setExercises}/>
        </div>
    );
}
export default ExerciseContainer; 