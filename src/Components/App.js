import React, { useState} from "react";
// import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import image from './get_fit_2.jpg'
import About from "./About";
import Header from "./Header";
import Browse from "./Browse";

function App() {
  const [page, setPage] = useState("/")
  return (
    <div className="app">
      <img className="pic" src={image} height={300} width={1200}></img>
      <Header onChangePage={setPage} />
      <Switch>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Browse">
          <Browse />
        </Route>
      </Switch>
    </div>
  );
}
export default App;

