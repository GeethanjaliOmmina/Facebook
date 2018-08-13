import React, { Component } from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './Landingpage.css';
class Landingpage extends Component {
    render() {
        return (
            <div id="m1">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default Landingpage;