import React, { useState} from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";

function App() {
  const [page, setPage] = useState("/")
  return (
    <div className="app">
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

