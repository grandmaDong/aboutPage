import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {}
export class Header extends Component<Props>{
    constructor(props: Props){
        super(props)
        this.state = {}
    }

    login = () => {
      console.log('login page');
    }
    render () {
        return (
          <header>
            <div className="header-inner">
              <div className="logo" onClick={this.login}>
                <Link to="/login">登录</Link>
              </div>
              <div className="m-nav">{this.props.children}</div>
              <div className="search-box">
                <input type="text" className="search-input"></input>
                <div className="search-btn"></div>
              </div>
            </div>
          </header>
        )
    }
}