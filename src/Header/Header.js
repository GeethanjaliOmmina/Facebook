import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="headercomp">
                    <b id="face">facebook</b>
                    <div id="email" class="comp"> Email or phone<br />
                        <input placeholder="Email" /><br />
                        <input type="checkbox" name="check" />Keep me logged in
                  </div>
                    <div id="pwd" class="comp">Password<br />
                        <input placeholder="Password" /><br />
                        <Link to="/forgotpassword" style={{ color: 'white', textDecoration: 'none' }
                        } >Forgotten your password?</Link>
                    </div>
                    <div id="blogin">
                        <button id="b1"><Link to="/Login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
