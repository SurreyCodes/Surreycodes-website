import React, { Component } from 'react';
import Logo from '../assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <header id="header" >
        <Link id="logo" to="/">
          <img src={Logo} width="30" height="30" alt="SurreyCodes"/>
        </Link>
            <ul id="navbar">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/meetup">Meetup</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li>
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">Members</Link>
              </li>
              <li>
                <Link className="nav-link" to="/sponsors">Sponsors</Link>
              </li>
            </ul>
      </header>
    );
  }
}

export default Header;
