import React, { useEffect, useState } from "react";
import Userpage from "./Userpage";
import Dashboard from "./Dashboard";

function NewUser({ exercises }) {
let goodText = "Thank you, your username has been accepted!"
let failText = "You didn't enter anything."
const [added, setAdded] = useState("");
let name = "";
let workouts = [];

function handleAdd(e) {
    e.preventDefault();
     name = e.target.value;
}

function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
        setAdded("false")
    }
    else {
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
}
return (
    <div className="add-user-form">
        {added === "true" ? <Dashboard theText={goodText} /> : null } 
        {/* ^^how do i jump to the login page after closing alert?  */}
        {added === "false" ? <Dashboard theText={failText} /> : null }
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