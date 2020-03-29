import React, { Component } from "react";
import { Search } from "../Search/search";

interface Props {}
export class Header extends Component<Props>{
    constructor(props: Props){
        super(props)
        this.state = {

        }
    }
    render () {
        return (
          <header>
            <div className="header-inner">
              <div className="logo"></div>
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