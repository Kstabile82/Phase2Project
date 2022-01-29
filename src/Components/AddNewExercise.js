import React, { useState } from "react";
import Dashboard from "./Dashboard";

function AddNewExercise() { 
    const [added, setAdded] = useState("");
    let name = "";
    let category = "";
    let difficulty = "";
    let successText = "Thanks! Your exercise has been added to the database.";
    let errorText = "You didn't complete all the fields, please try again.";
    function handleAdd(e) {
        e.preventDefault();
        if (e.target.name === "name") {
            name = e.target.value;
        }
        else if (e.target.name === "category") {
            category = e.target.value;
        }
        else {
            difficulty = e.target.value;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (category === "" || difficulty === "" || name === "") {
            setAdded("false") //How do I reset the form or go back so it can be submitted once missing info is added? 
        }
        else {
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
     }  
    return (
        <div className="add-exercise-form">
            <h1>Add New Exercise</h1>
            <form onSubmit={handleSubmit}>
            {added === "true" ? <Dashboard theText={successText} /> : null }
            {added === "false" ? <Dashboard theText={errorText} /> : null}
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
