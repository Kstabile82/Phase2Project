import React, { useState } from "react";
import SaveNewWorkout from "./SaveNewWorkout";

function FilterResults({ matches, exercises, user, exerciseList }) {
    // const [addedExercises, setAddedExercises] = useState([]);
    // const [checked, setChecked] = useState(false);
    // function handleClick(e) {
    //     if (e.target.className === "likes") { 
    //         matches.map(match => { 
    //                 if (match.name === e.target.parentNode.className) {
    //                     match.likes++
    //                     e.target.value++
    //                     fetch (`http://localhost:3000/exercises/${match.id}`, {
    //                         method: "PATCH",
    //                         headers: {
    //                         "Content-Type": "application/json",
    //                         },
    //                     body: JSON.stringify({
    //                         "likes": match.likes
    //                     }),
    //                 })
    //                 .then((r) => r.json())
    //                 .then((json) => json.likes = match.likes)
    //                 e.target.innerText= `Likes: ${match.likes}`
    //                }
    //         })
    //     }
    //     else {
    //         if (!addedExercises.includes(e.target.parentElement.className)) {
    //             setAddedExercises([...addedExercises, e.target.parentElement.className]); 
    //         }
    //     }
    // }
    // function handleSortByLikes(e) {
    //     setChecked(!checked)
    //     if (e.target.checked === true) {
    //         matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
    //     }
    //     else {
    //         matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
    //     }
    // }
    // function handleDelete(e) {
    //     let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
    //     setAddedExercises(newList)
    // }
    // let exerciseList = addedExercises.map(addedEx => 
    //     <li key={addedEx} name={addedEx}>{addedEx} 
    //     <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
    //     </li> 
    // )
    
return (
    <div>
        {/* <ul>{matches.map(match => (
            <li className={match.name} key={match.id}>{match.name}
            <br></br>
                <button className="likes" value={match.likes} onClick={handleClick}>Likes: {match.likes}</button>
                <button className="add" onClick={handleClick}>Add to List</button>
            </li>
        )) } </ul>  
          <div className="popularity">
                <label className="sortbylikes">Sort By Likes
                    <input id="sort" type="checkbox" checked={checked} onChange={handleSortByLikes}></input>
                </label>
          </div>  */}
         {/* <h2>My Workout:</h2>
         <div>
             <ul>{exerciseList}</ul>
          {user != undefined ? <SaveNewWorkout user={user} exerciseList={exerciseList} exercises={exercises} /> : null}
          </div> */}
    </div> 
   );
}
export default FilterResults;
// function FilterResults({ category, difficulty, exercises, isSubmitted, user }) {
//     const [addedExercises, setAddedExercises] = useState([]);
//     const [matches, setMatches] = useState([]);
//     const [checked, setChecked] = useState(false);
//     if (isSubmitted = "true") {
//       exercises.filter(exercise => {
//           if (exercise.category === category && exercise.difficulty === difficulty) {
//               if (!matches.includes(exercise)) {
//                   setMatches([...matches, exercise])
//                }
//             }
//         })
//      }
//     function handleClick(e) {
//         if (e.target.className === "likes") { 
//             matches.map(match => { 
//                     if (match.name === e.target.parentNode.className) {
//                         match.likes++
//                         e.target.value++
//                         fetch (`http://localhost:3000/exercises/${match.id}`, {
//                             method: "PATCH",
//                             headers: {
//                             "Content-Type": "application/json",
//                             },
//                         body: JSON.stringify({
//                             "likes": match.likes
//                         }),
//                     })
//                     .then((r) => r.json())
//                     .then((json) => json.likes = match.likes)
//                     e.target.innerText= `Likes: ${match.likes}`
//                    }
//             })
//         }
//         else {
//             if (!addedExercises.includes(e.target.parentElement.className)) {
//                 setAddedExercises([...addedExercises, e.target.parentElement.className]); 
//             }
//         }
//     }
//     function handleSortByLikes(e) {
//         setChecked(!checked)
//         if (e.target.checked === true) {
//             matches.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
//         }
//         else {
//             matches.sort((a,b) => (a.id > b.id) ? 1 : -1)
//         }
//     }

//     function handleDelete(e) {
//         let newList = addedExercises.filter(item => item + "x" !== e.target.parentNode.innerText)
//         setAddedExercises(newList)
//     }
//     let exerciseList = addedExercises.map(addedEx => 
//         <li key={addedEx} name={addedEx}>{addedEx} 
//         <button id={addedEx} className="delete" onClick={handleDelete}>x</button>
//         </li> 
//     )
    
// return (
//     <div>
//         <ul>{matches.map(match => (
//             <li className={match.name} key={match.id}>{match.name}
//             <br></br>
//                 <button className="likes" value={match.likes} onClick={handleClick}>Likes: {match.likes}</button>
//                 <button className="add" onClick={handleClick}>Add to List</button>
//             </li>
//         )) } </ul>  
//           <div className="popularity">
//                 <label className="sortbylikes">Sort By Likes
//                     <input id="sort" type="checkbox" checked={checked} onChange={handleSortByLikes}></input>
//                 </label>
//           </div> 
//          <h2>My Workout:</h2>
//          <div>
//              <ul>{exerciseList}</ul>
//           {user != undefined ? <SaveNewWorkout user={user} exerciseList={exerciseList} exercises={exercises} /> : null}
//           </div>
//     </div> 
//    );
// }
// export default FilterResults;