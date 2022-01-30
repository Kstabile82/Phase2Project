import React, { useEffect, useState } from "react"; 
import ExerciseContainer from "./ExerciseContainer";
import RenderUserWorkouts from "./RenderUserWorkouts";

function Welcomepage({ user }) {
  const [exercises, setExercises] = useState([]);
  const [nextStep, setNextStep] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((r) => r.json())
        .then((currentExercises) => {
            setExercises(currentExercises);
         });
    },[]);

    function handleNext(e) {
        e.preventDefault();
        if (e.target.id === "createnew") {
            setNextStep(e.target.id)
        }
          else {
            setNextStep("seeworkouts")
          }        
    }

    if (user.name !== undefined) {
        return (
            <div>Welcome, {user.name}! 
                <form>What would you like to do?
                    <button id="createnew" name="nextsteps" onClick={handleNext}>Create a New Workout</button>
                    <button id="seeworkouts" name="nextsteps" onClick={handleNext}>See My Workout List</button>
                </form>
                <div >{(nextStep) === "createnew" ? <ExerciseContainer user={user} exercises={exercises}/> : null } </div>
                <div >{(nextStep) === "seeworkouts" ? <RenderUserWorkouts user={user} /> : null }</div>
            </div>
        )
    }
return (
    <div>

    </div>
)



}
export default Welcomepage; 