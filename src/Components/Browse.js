import React, { useState, useEffect } from "react";
import ExerciseContainer from "./ExerciseContainer";

function Browse() {
   

    return (
        <div className="tryit">
            Choose the exercise category and difficulty level you'd like to see, then add exercises to the "My Workout" list as desired. To delete an exercise from your workout list, click the "X" that appears once it's been added. Feel free to add a new exercise to our database, too! 
            <ExerciseContainer />
        </div>
    ); 
}
export default Browse; 