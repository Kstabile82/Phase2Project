import React, { useState, useEffect } from "react"; 
import ExerciseForm from "./ExerciseForm";
import AddNewExercise from "./AddNewExercise";
import SearchExercises from "./SearchExercises";
import Card from "./Card";

function ExerciseContainer({ user }) {
    const [clicked, setClicked] = useState("");
    const [exercises, setExercises] = useState([]);
    const [addedExercises, setAddedExercises] = useState([]);

    // const [unFiltered, setUnfiltered] = useState(true)
    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((r) => r.json())
        .then((currentExercises) => {
            setExercises(currentExercises);
         });
    },[exercises]);
    function handleClicked(e, ex) {
        setClicked(ex.name)
    }
    function handleClick(e) {
        if (!addedExercises.includes(e.target.parentElement.firstChild.innerText)) {
            setAddedExercises([...addedExercises, e.target.parentElement.firstChild.innerText]); 
        // if (!addedExercises.includes(e.target.parentElement.className)) {
        //     setAddedExercises([...addedExercises, e.target.parentElement.className]); 
    }
}
    //see all exercises button that renders the below if clicked, sets state. make the names clickable to pull up card
    return (
        
        <div>
            <br></br>
            <SearchExercises user={user} exercises={exercises}  />
            <ExerciseForm 
            exercises={exercises} 
            user={user}
            // setUnfiltered={setUnfiltered}
            setClicked={setClicked}
            clicked={clicked}
            handleClick={handleClick}
            setAddedExercises={setAddedExercises}
            addedExercises={addedExercises}
            />
             {/* {unFiltered ?  */}
             <div>
            <h3>All Exercises</h3> 
            <ul className="seeallexercises">{exercises.map(ex => {
               return (
            //    <li className={ex.name} key={ex.id} onClick={handleClicked}>{ex.name}
                /* {clicked === ex.name ? <Card exercise={ex} setResult={setClicked} /> : null} */
                <div className="listofall">
                    <li key={ex.id} onClick={(e) => handleClicked(e, ex)}>{ex.name}</li>
                    <button onClick={handleClick}>Add to List</button>
                    <div key={ex.name}>{(clicked) === ex.name ? <Card exercise={ex} setResult={setClicked} /> : null }</div>
                </div>
                // </li> 
               )
               })} </ul> </div>  
               {/* : null} */}
            <AddNewExercise user={user} exercises={exercises} setExercises={setExercises}/>
        </div>
    );
}
export default ExerciseContainer; 