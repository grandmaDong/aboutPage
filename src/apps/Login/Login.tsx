import React, { Component } from "react";
import  axios from 'axios'

interface Props {}
interface State {
    message: string;
}
export class Login extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            message: 'refresh page througt hmr'
        }
    }

    componentWillMount () {
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists').then(
        //     (res) => {
        //         console.log(res)
        //     }
        // ).catch(error => console.log(error));
    }

    login = () => {
      console.log('login');
    }

    render () {
      return (
        <div className="login-page">
          <div className="login-box">
            <div className="login-title">登录</div>
            <div className="form-box">
              <div className="login-item">
                <span className="l-lebal">用户名：</span><input className="name-input" type="text"></input>
              </div>
              <div className="login-item">
                <span className="l-lebal">密码：</span><input className="name-input" type="password"></input>
              </div>
              <div className="login-btn">
                <button onClick={this.login}>登录</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
}