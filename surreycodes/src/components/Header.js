import React, { Component } from 'react';
import Logo from '../assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <header id="header" >
        <div className="header-flex-container">
          <Link className={this.props.animate ? "logo-true" : "logo"} to="/">
            <img src={Logo} width="30" height="30" alt="SurreyCodes"/>
          </Link>
        </div>

        <div class="navbar">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/meetup">Meetup</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/events">Events</Link>
            <Link className="nav-link" to="/about">Members</Link>
            <Link className="nav-link" to="/sponsors">Sponsors</Link>
        </div>
      </header>
    );
  }
}

export default Header;
