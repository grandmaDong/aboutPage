import React, { Component } from "react";

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
              {this.props.children}
            </div>
          </header>
        )
    }
}