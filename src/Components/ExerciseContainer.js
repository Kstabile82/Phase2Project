import React, { useState, useEffect } from "react"; 
import ExerciseForm from "./ExerciseForm";
import AddNewExercise from "./AddNewExercise";

function ExerciseContainer({ user }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((r) => r.json())
        .then((currentExercises) => {
            setExercises(currentExercises);
         });
    },[]);
    return (
        <div>
            <ExerciseForm 
            exercises={exercises} 
            user={user}
            />
            <AddNewExercise user={user} exercises={exercises}/>
        </div>
    );
}
export default ExerciseContainer; 