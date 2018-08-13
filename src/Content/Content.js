import React, { Component } from 'react';
import './Content.css'
import { Link } from 'react-router-dom';
class Content extends Component {
    render() {
        return (
            <div>
                <div id="conleft" class="d1">
                   <b> <p>Facebook helps you connect and share with the people in your life.</p></b>
                   <br/> <img src="/images/fnetwork.png" alt="facebook" />
                </div>
                <div id="cont" class="d1">
                   <b><h1>Create an account</h1>
                    <p>It's free and always will be</p></b>
                    <form>
                        <input type="text" class="f1" placeholder="First Name" size="23" />
                        <input type="text" class="f1" placeholder="Last Name" size="23" /><br />
                        <input type="text" class="f1" placeholder="Your email address" size="55" /><br />
                        <input type="text" class="f1" placeholder="Re-enter email address" size="55" /><br />
                        <input type="text" class="f1" placeholder="Password" size="55" /><br />
                        <input type="calender" class="f1" placeholder="mm/dd/yyyy" size="23" /><br />
                        <input type="radio" name="gender" class="f1" value="Male" checked /><span>Male</span>
                        <input type="radio" name="gender" class="f1" value="Female" /><span>Female</span><br />
                        <p class="f1">By clicking Create an account,you agree to our Terms and that you have read our Data Policy,including our Cookie Use.</p>
                        <button id="bs" size="15"><Link to="/Signup" style={{ color: 'white'}}>Sign Up</Link></button>
                        <hr />
                        <p><a href="/create page"><Link to="/Createcelpage">Create a Page</Link></a> for a celebrity,band or business.</p>
                    </form>
                </div>
            </div>
        );
    }
}
export default Content;