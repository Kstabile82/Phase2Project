import React, { useState } from "react"; 
import Dashboard from "./Dashboard"
import SaveNewWorkout from "./SaveNewWorkout";

function ExerciseForm ({ exercises, user }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitted, setSubmitted] = useState("")
    const [matches, setMatches] = useState([]);
    let matchArr = [];
    let errorText= "You didn't complete both fields"
    const [addedExercises, setAddedExercises] = useState([]);
    const [checked, setChecked] = useState(false);

    function handleSubmit(e) { 
        setMatches([])
        e.preventDefault();
        if (category == "" || difficulty == "") { //if either are blank, not submitted
            setSubmitted("false")
        }
        else { //is submitted
            setSubmitted("true")
            exercises.filter(exercise => {
                if (exercise.category === category && exercise.difficulty === difficulty) {
                    if (!matches.includes(exercise)) {
                    //  setMatches([...matches, exercise])
                    matchArr.push(exercise)
                    }
                  }
              })
        }
        setMatches(matchArr);
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
    function handleClick(e) {
        if (e.target.className === "likes") { 
            matches.map(match => { 
                    if (match.name === e.target.parentNode.className) {
                        match.likes++
                        e.target.value++
                        fetch (`http://localhost:3000/exercises/${match.id}`, {
                            method: "PATCH",
                            headers: {
                            "Content-Type": "application/json",
                            },
                        body: JSON.stringify({
                            "likes": match.likes
                        }),
                    })
                    .then((r) => r.json())
                    .then((json) => json.likes = match.likes)
                    e.target.innerText= `Likes: ${match.likes}`
                   }
            })
        }
        else {
            if (!addedExercises.includes(e.target.parentElement.className)) {
                setAddedExercises([...addedExercises, e.target.parentElement.className]); 
            }
        }
    }
    function handleSortByLikes(e) {
        setChecked(!checked)
        if (e.target.checked === true) {
            matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
        }
        else {
            matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
        }
    }
    function handleDelete(e) {
        let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
        setAddedExercises(newList)
    }
    let exerciseList = addedExercises.map(addedEx => 
        <li key={addedEx} name={addedEx}>{addedEx} 
        <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
        </li> 
    );
        return (
            <div>
                <h3>Filter By:</h3>
                    <div className="category">
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
                                        <button className="likes" value={match.likes} onClick={handleClick}>Likes: {match.likes}</button>
                                        <button className="add" onClick={handleClick}>Add to List</button>
                                        </li>
                                        )) } </ul> 
                                    <h3>My Workout: </h3>
                                     <ul>{exerciseList}</ul>
                                        {user != undefined && exerciseList.length > 0 ? <SaveNewWorkout user={user} exerciseList={exerciseList} exercises={exercises} /> : null}
                                 </div>
                    </div>
           </div>
        );
}

export default ExerciseForm; 

// function ExerciseForm ({ exercises, user }) {   
//     const [difficulty, setDifficulty] = useState("");
//     const [category, setCategory] = useState("");
//     const [isSubmitted, setSubmitted] = useState(""); 
//     let theText= "You didn't complete both fields"
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (category != "" && difficulty != "") {
//             setSubmitted("true")
//         }
//         else {
//             setSubmitted("false") 
//         }
//     }
//     function handleChange(e) {
//         e.preventDefault();
//         if (e.target.name === "category") {
//             setCategory(e.target.value);
//         }       
//         else {
//             setDifficulty(e.target.value);
//         }
//     }
//     //fix form so that it clears each time its been submitted
//         return (
//             <div>
//                 <h4>Filter By:</h4>
//                     <div className="category">
//                         <form className="exerciseForm" onSubmit={handleSubmit}>
//                             {/* <select name="category" value={category} id="category" onChange={handleChange}> */}
//                             <select name="category" id="category" onChange={handleChange}>
//                             <option value="" hidden>Category</option>
//                             <option value="cardio">Cardio</option>
//                             <option value="upper body">Upper Body</option>
//                             <option value="lower body">Lower Body</option>
//                             <option value="core">Core</option>
//                         </select>
//                             <select name="difficulty" id="difficulty" onChange={handleChange}>
//                             <option value="" hidden>Difficulty</option>
//                             <option value="beginner">Beginner</option>
//                             <option value="intermediate">Intermediate</option>
//                             <option value="advanced">Advanced</option>
//                         </select>
//                         <br></br>
//                         <button>Submit</button>
//                         <div>
//                             {isSubmitted === "true" ? <FilterResults 
//                                 category={category} 
//                                 difficulty={difficulty}
//                                 isSubmitted={isSubmitted} 
//                                 exercises={exercises}
//                                 user={user} /> : null}
//                             {isSubmitted === "false" ? <Dashboard theText={theText} /> : null}
//                         </div>
//                     </form>
//                     </div>
//                     <br></br>
//            </div>
//         );
// }
// export default ExerciseForm; 