import React, { Component, StatelessComponent } from "react";
import { Route } from 'react-router';
import { Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import './app.less'
import { Home } from "./apps/Home/Home";
import { About } from "./apps/About/About";
import { Header } from './apps/Header/Header'

const App = () => {
  
  return (
    <div className="main-page">
      <Router>
        <div>
          <Header>
            <ul className="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </Header>
        </div>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;