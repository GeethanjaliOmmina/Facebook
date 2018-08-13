import React, { Component } from 'react';
import Head from '../Head/Head';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div id="m1">
                <Head/>
                <div id="log">
                   <b> <h1 id="lp">Login</h1></b>
                    <input  class="f2" type="text" placeholder="Email address or Phone number" size="45"/>
                   
                    <input class="f2" type="password" placeholder="Password" size="45"/><br/>
                    <button id="bt" size="28">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;