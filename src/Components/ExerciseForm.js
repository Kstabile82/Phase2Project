import React, { useState } from "react"; 
import Dashboard from "./Dashboard"

import LikeBtn from "./LikeBtn";
import MyWorkoutList from "./MyWorkoutList";

function ExerciseForm ({ exercises, user, addedExercises, setAddedExercises, handleClick }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitted, setSubmitted] = useState("")
    const [matches, setMatches] = useState(exercises);
    let errorText= "You didn't complete both fields"
    // const [addedExercises, setAddedExercises] = useState([]);
    const [checked, setChecked] = useState(false);
    let matchedEx; 
    function handleSubmit(e) { 
        setMatches(exercises)
        e.preventDefault();
        // setUnfiltered(false);
        if (category == "" || difficulty == "") { //if either are blank, not submitted
            setSubmitted("false")
        }
        else { //is submitted
            setSubmitted("true");
            matchedEx = exercises.filter(exercise => {
                if (exercise.category === category && exercise.difficulty === difficulty) {
                    if (!matches.includes(exercise)) {
                    return exercise;
                    }
                  }
              })
              setMatches(matchedEx);
        }
    }
 
    function handleChange(e) { //setting the category & difficulty to match input selections
        e.preventDefault();

        if (e.target.name === "category") {
            setCategory(e.target.value);
        }       
        else if (e.target.name === "difficulty") {
            setDifficulty(e.target.value);
        }
    }
    // function handleClick(e) {
    //         if (!addedExercises.includes(e.target.parentElement.className)) {
    //             setAddedExercises([...addedExercises, e.target.parentElement.className]); 
    //     }
    // }
    function handleSortByLikes(e) {
        setChecked(!checked)
        if (e.target.checked === true) {
            matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
        }
        else {
            matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
        }
    }
    // function handleDelete(e) {
    //     let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
    //     setAddedExercises(newList)
    // }
    // let exerciseList = addedExercises.map(addedEx => 
    //     <li key={addedEx} name={addedEx}>{addedEx} 
    //     <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
    //     </li> 
    // );
        return (
            <div>
                    <div className="category">
                    <h4>Filter exercises:</h4>
                        <form className="exerciseForm" onSubmit={handleSubmit}>
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
                            <div className="popularity">
                                    <label className="sortbylikes">Sort By Likes
                                        <input id="sort" type="checkbox" checked={checked} onChange={handleSortByLikes}></input>
                                    </label>
                            {isSubmitted === "false" ? <Dashboard theText={errorText} /> : null}
                            </div>
                        </form>
                                <div>
                                    <ul>{matches.map(match => (
                                        <li className={match.name} key={match.id}>{match.name}
                                        <br></br>
                                        <LikeBtn match={match} />
                                        {/* <button className="likes" value={match.likes} onClick={handleClick}>Likes: {match.likes}</button> */}
                                        <button className="add" onClick={handleClick}>Add to List</button>
                                        </li>
                                        )) } </ul> 
                                        <MyWorkoutList addedExercises={addedExercises} user={user} exercises={exercises} setAddedExercises={setAddedExercises} />
                                    {/* <h3>My Workout: </h3>
                                     <ul>{exerciseList}</ul>
                                        {user != undefined && exerciseList.length > 0 ? <SaveNewWorkout user={user} exerciseList={exerciseList} exercises={exercises} /> : null}
                                 </div>  */}
                                </div>
                        </div>
           </div>
        );
}

export default ExerciseForm; 