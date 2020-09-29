import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
