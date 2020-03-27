import React, { Component } from "react";
import  axios from 'axios'

interface Props {}
interface State {
    message: string;
}
export class Test extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            message: 'refresh page througt hmr'
        }
    }

    componentWillMount () {
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists').then(
            (res) => {
                console.log(res)
            }
        ).catch(error => console.log(error));
    }

    render () {
        return (
            <h2>{this.state.message}</h2>
        )
    }
}