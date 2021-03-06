import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Detail from "./components/Movies/MovieDetails";
import Login from "./components/Login";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/detail/:id' component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
