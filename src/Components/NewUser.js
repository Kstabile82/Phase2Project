import React, { useEffect, useState } from "react";
import Userpage from "./Userpage";
import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";

function NewUser({ exercises }) {
let goodText = "Thank you, your username has been accepted!"
let failText = "You didn't enter anything."
let takenUserName = "Sorry, that username is already taken. Please try something more unique."
const [added, setAdded] = useState("");
// const [name, setName] = useState("");
let name = "";
let workouts = [];

const [userData, setUserData] = useState([]);
useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then((currentusers) => {
            setUserData(currentusers)
      })
 },[]);

function handleAdd(e) {
    e.preventDefault();
        // setName(e.target.value)
        name = e.target.value;
}
function handleSubmit(e) {
    e.preventDefault();
     if (name === "") {
        setAdded("false")
    } 
    else {
    let nameMatch = userData.find(user => user.name === name); 
    if (nameMatch === undefined) {
        fetch ("http://localhost:3000/users", {
           method: "POST",
           headers: {
           "Content-Type": "application/json",
            },
            body: JSON.stringify({
            name,
            workouts,
            }),
        })
        .then((r) => r.json())
        setAdded("true");
     }
     else {
         setAdded("taken")
     }
    }
    
    // if (name === "") {
    //     setAdded("false")
    // }
//     else {
//         fetch ("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//             },
//         body: JSON.stringify({
//             name,
//             workouts,
//         }),
//     })
//         .then((r) => r.json())
//         setAdded("true");
// }

//     if (name === "") {
//         setAdded("false")
//     }
//     else {
//     fetch ("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//     body: JSON.stringify({
//           name,
//           workouts,
//     }),
//  })
//     .then((r) => r.json())
//     setAdded("true");
// }
}
return (
    <div className="add-user-form">
        {added === "true" ? <Dashboard theText={goodText} /> : null } 
        {/* ^^how do i jump to the login page after closing alert?  */}
        {added === "false" ? <Dashboard theText={failText} /> : null }
        {added === "taken" ? <Dashboard theText={takenUserName} /> : null }
        <h1>Create New User</h1>
        <form onSubmit={handleSubmit}>
            <label>New Username:  
                <input onChange={handleAdd}
                type="text"
                name="username"
                placeholder="Pick a unique username"
                ></input>
                <button>Submit</button>
            </label>
        </form>
    </div>
);
}
export default NewUser;