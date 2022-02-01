import React, { useState} from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import image from './get_fit_2.jpg'

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
      </Switch>
    </div>
  );
}
export default App;

