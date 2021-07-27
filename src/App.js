import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorite from "./pages/Favorite";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Movie-57-React-Redux">

            <HomePage />
          </Route>
          <Route path="*/favorite">

            <Favorite />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
