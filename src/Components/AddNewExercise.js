import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ExerciseContainer from "./ExerciseContainer";

//How do I get this to fetch the NEW exercise list so it's updated in real time? call ExerciseContainer in return?  
//make this a button ? so if its clicked it goes to blank screen and then needs to render exercise container 
function AddNewExercise({ exercises }) { 
    const [added, setAdded] = useState("");
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    let successText = "Thanks! Your exercise has been added to the database.";
    let errorText = "You didn't complete all the fields, please try again.";
    let takenText = "We already have an exercise by that name in our database, please use a more specific name."
    function handleAdd(e) {
        e.preventDefault();
        if (e.target.name === "name") {
           setName(e.target.value);
        }
        else if (e.target.name === "category") {
            setCategory(e.target.value);
        }
        else {
            setDifficulty(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (category == "" || difficulty == "" || name == "") {
            setAdded("false") 
        }
        else {
        let findMatch = exercises.find(ex => ex.name.toLowerCase() === name.toLowerCase());
        if (findMatch === undefined) {
            fetch ("http://localhost:3000/exercises", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name,
                category,
                difficulty,
                likes: 0,
                }),
                })
            .then((r) => r.json())
            setAdded("true");
          }
         else {
            setAdded("taken");
        }
    }
}
    return (
        <div className="add-exercise-form">
            <h3>Add New Exercise</h3>
            <form onSubmit={handleSubmit}>
            {added === "true" ? <Dashboard theText={successText} /> : null }
            {added === "false" ? <Dashboard theText={errorText} /> : null}
            {added === "taken" ? <Dashboard theText={takenText} /> : null}
                <input onChange={handleAdd}
                type="text"
                name="name"
                placeholder="Name"
                ></input>
                <select name="category" id="category" onChange={handleAdd}>
                <option value="" hidden>Category</option>
                <option value="cardio">Cardio</option>
                <option value="upper body">Upper Body</option>
                <option value="lower body">Lower Body</option>
                <option value="core">Core</option>
                </select>
                <select name="difficulty" id="difficulty" onChange={handleAdd}>
                <option value="" hidden>Difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default AddNewExercise; 
