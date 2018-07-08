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
    let toggler = !this.state.togglerIsToggled;
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
            <NavLink exact className="nav-link" to="/">HOME</NavLink>
            <NavLink className="nav-link" to="/about-us">ABOUT US</NavLink>
            <NavLink className="nav-link" to="/fulltime">LEARN TO CODE</NavLink>
            <NavLink className="nav-link" to="/team">OUR TEAM</NavLink>
            <NavLink className="nav-link" to="/sponsors">OUR SPONSORS</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
