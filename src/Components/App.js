import React, { useState} from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Userpage from "./Userpage";
// function App() {
//   return (
//     <div className="app">
//       <Header />
//     </div>
//   );
// }
// export default App;

function App() {
  const [page, setPage] = useState("/")
  return (
    <div className="app">
      <Header onChangePage={setPage} />
      <Switch>
        <Route path="/userpage">
          <Userpage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;


//need a Log Out if Logged In, takes back to homepage
//need a NavBar 
  //Home welcome page
  //Workout Builder (addnewex, savenewworkout)
  //LogIn that toggles to LogOut (newUser, userpage)
