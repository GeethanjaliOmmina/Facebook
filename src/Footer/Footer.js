import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span>
                  <p id="word-spacing"> English(US) France Brazil Italy Portugal</p>
                    </span>
                    <hr/>
                    <span id="left">facebook &copy;2011 English(US) </span>
                    <span id="right"><p id="word-spacing"> .Mobile .FindFriends .Badges .People .Pages .About .Advertising .Create a page .Advertisement .Developers .Careers .Privacy .Terms .Help</p></span>
            </div>
        );
    }
}

export default Footer;