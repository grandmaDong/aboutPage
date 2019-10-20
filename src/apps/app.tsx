import React, { Component } from "react";

interface Props {}
export class Test extends Component<Props>{
    constructor(props: Props){
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <h2>test page</h2>
        )
    }
}