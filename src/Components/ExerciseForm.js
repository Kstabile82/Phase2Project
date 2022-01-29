import React, { useState } from "react"; 
import Dashboard from "./Dashboard"
import FilterResults from "./FilterResults";

function ExerciseForm ({ exercises, user }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitted, setSubmitted] = useState(""); 
    let theText= "You didn't complete both fields"
    function handleSubmit(e) {
        e.preventDefault();
        if (category != "" && difficulty != "") {
            setSubmitted("true")
        }
        else {
            setSubmitted("false") 
        }
    }
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }       
        else {
            setDifficulty(e.target.value);
        }
    }
    //fix form so that it clears each time its been submitted
        return (
            <div>
                <h4>Filter By:</h4>
                    <div className="category">
                        <form className="exerciseForm" onSubmit={handleSubmit}>
                            {/* <select name="category" value={category} id="category" onChange={handleChange}> */}
                            <select name="category" id="category" onChange={handleChange}>
                            <option value="" hidden>Category</option>
                            <option value="cardio">Cardio</option>
                            <option value="upper body">Upper Body</option>
                            <option value="lower body">Lower Body</option>
                            <option value="core">Core</option>
                        </select>
                            <select name="difficulty" id="difficulty" onChange={handleChange}>
                            <option value="" hidden>Difficulty</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        <br></br>
                        <button>Submit</button>
                        <div>
                            {isSubmitted === "true" ? <FilterResults 
                                category={category} 
                                difficulty={difficulty}
                                isSubmitted={isSubmitted} 
                                exercises={exercises}
                                user={user} /> : null}
                            {isSubmitted === "false" ? <Dashboard theText={theText} /> : null}
                        </div>
                    </form>
                    </div>
                    <br></br>
           </div>
        );
}
export default ExerciseForm; 