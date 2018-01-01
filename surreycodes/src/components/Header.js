import React, { Component } from 'react';
import Logo from '../assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <header id="header" >
        <nav id="navbar" >
          <Link id="logo" to="/">
            <img src={Logo} width="30" height="30" alt="SurreyCodes"/>
          </Link>
            <ul id="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/meetup">Meetup</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/about">Members</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
