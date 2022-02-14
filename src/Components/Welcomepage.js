import React, { useState } from "react"; 
import ExerciseContainer from "./ExerciseContainer";
import RenderUserWorkouts from "./RenderUserWorkouts";
import { useHistory } from "react-router-dom";

function Welcomepage({ user }) {
  const [hasWorkouts, setHasWorkouts] = useState(false);
  let history = useHistory(); 

  const [nextStep, setNextStep] = useState("");
    if (user.workouts && user.workouts.length !== 0) {
        setHasWorkouts(true)
    }
    function handleNext(e) {
        e.preventDefault();
        if (e.target.id === "createnew") {
            setNextStep(e.target.id)
        }
          else if (e.target.id === "seeworkouts") {
            setNextStep("seeworkouts")
          }     
          else {
            setNextStep("logout")
            history.push("/home");
          }   
    }
      if (user.name !== undefined) {
        return (
            <div className="welcomeform">Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}! 
                <form>What would you like to do?
                    <button id="createnew" name="nextsteps" onClick={handleNext}>Create a New Workout</button>
                    {/* <button id="seeworkouts" name="nextsteps" onClick={handleNext}>See My Workout List</button>  */}
                    <button id="seeworkouts" name="nextsteps" style={{display: hasWorkouts ? 'visible' : 'none' }} onClick={handleNext}>See My Workout List</button>
                    <button id="logout" name="logout" onClick={handleNext}>Log Out</button>
                </form>
                <div >{(nextStep) === "createnew" ? <ExerciseContainer user={user} /> : null } </div>
                <br></br>
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