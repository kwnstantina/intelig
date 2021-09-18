import React from 'react';
import './navigation.scss';
import logo from "../../images/logo.png";

const Navigation =()=>{
    return(
        <header >
            <h2/>
            <img src={logo} alt="logo" style={{width: "100px"}} />
            <input className="switcher" type="checkbox" id="menu"/>
                <label className="open" htmlFor="menu">
                    <i className="fa fa-bars"></i>
                </label>
                <nav>
                    <ul >
                        <li><a href="/">Home</a></li>
                        <li><a href="database">Database</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Sign In </a></li>
                    </ul>
                    <label className="close" htmlFor="menu">
                        <i className="fa fa-times"></i>
                    </label>
                </nav>
            </header>

    )
}

export default Navigation;
