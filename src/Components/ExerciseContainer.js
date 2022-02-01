import React from "react"; 
import ExerciseForm from "./ExerciseForm";
import AddNewExercise from "./AddNewExercise";

function ExerciseContainer({ user, exercises }) {
    return (
        <div>
            <ExerciseForm 
            exercises={exercises} 
            user={user}
            />
            <AddNewExercise />
        </div>
    );
}
export default ExerciseContainer; 