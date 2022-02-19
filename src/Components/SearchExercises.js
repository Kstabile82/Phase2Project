import React, { useState } from "react";
import Card from "./Card";
import Dashboard from "./Dashboard";


function SearchExercises({ exercises }) {
const [exerciseName, setExerciseName] = useState("");
const noMatches = "No matches came up in this search, but feel free to add the exercise to our database!"
const [result, setResult] = useState("");
 function handleSubmit(e) {
     e.preventDefault();
     let res = exercises.find(ex => ex.name.toLowerCase() === exerciseName.toLowerCase());
     setResult(res);
     if (res === undefined) {
         setResult("none")
     }
    } 
    return (
        <div>
            <h4>Search for an exercise by name:</h4>
            <form className="search" onSubmit={handleSubmit}> 
                <input 
                type="text" 
                id="inputext" 
                placeholder="Exercise name"
                onChange={(e) => setExerciseName(e.target.value)}></input>  
                <button>Enter</button>
            </form>
            {result !== "" && result !== "none" ? <Card exercise={result} setResult={setResult} /> : null}
            {result === "none" ? <Dashboard theText={noMatches} /> : null }
        </div>
    )
}
export default SearchExercises; 