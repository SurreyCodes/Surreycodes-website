import React, { Component } from 'react';
import Logo from '../../assets/SurreyCodeCampLogoNew.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togglerIsToggled: false
    };
  }

  toggleMenu(){
    var toggler = !this.state.togglerIsToggled;
    if (toggler === true) {
      document.getElementById('header').classList.remove('header-mobile-drop');
    } else {
      document.getElementById('header').classList.add('header-mobile-drop');
    }
    this.setState({
      togglerIsToggled: toggler
      });
  }
  render(){
    return(
      <header id="header" className="header-mobile">
        <div className="container">
          <nav className="navbar">
            <NavLink className={this.props.animate ? "branding logo-true" : "branding logo"} to="/" activeStyle={{border: 'none'}}>
              <img src={Logo} width="50" height="50" alt="SurreyCodes"/>
            </NavLink>
            <button id="toggler" onClick={this.toggleMenu.bind(this)}><i className="fa fa-align-justify" aria-hidden="true"></i></button>
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About Us</NavLink>
            <NavLink className="nav-link" to="/fulltime">Learn to Code</NavLink>
            <NavLink className="nav-link" to="/volunteer">Our Team</NavLink>
            <NavLink className="nav-link" to="/sponsors">Our Sponsors</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
