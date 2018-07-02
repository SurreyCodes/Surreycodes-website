import React, { Component } from 'react';
import Logo from '../../assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';
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
            <Link className={this.props.animate ? "branding logo-true" : "branding logo"} to="/">
              <img src={Logo} width="50" height="50" alt="SurreyCodes"/>
            </Link>
            <button id="toggler" onClick={this.toggleMenu.bind(this)}><i className="fa fa-bars"></i></button>
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/fulltime">Learn to Code</Link>
            <Link className="nav-link" to="/volunteer">Join Us</Link>
            <Link className="nav-link" to="/sponsors">Our Sponsors</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
