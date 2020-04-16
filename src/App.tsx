import React, { Component } from "react";
import { Route } from 'react-router';
import { Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import './app.less'
import { Home } from "./apps/Home/Home";
import { About } from "./apps/About/About";
import { Header } from './apps/Header/Header'
import { Message } from './apps/Message/message'
import { BlogDetail } from "./apps/BlogDetail/BlogDetail";
import { Login } from "./apps/Login/Login";

const App = () => {
  
  return (
    <div className="main-page">
      <Router>
        <div>
          <Header>
            <ul className="top-nav">
              <li><Link to="/message">留言</Link></li>
              <li><Link to="/about">关于</Link></li>
              <li><Link to="/home">首页</Link></li>
            </ul>
          </Header>
        </div>
        <div className="page-content">
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/message' component={Message}></Route>
            <Route path='/blogDetail' component={BlogDetail}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;