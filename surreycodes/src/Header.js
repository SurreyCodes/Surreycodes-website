import React, { Component } from 'react';
import Logo from './assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div>
        <header id="header" className="fixed-top">
          <nav id="navbar" className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Surrey Code Camp"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i>
      </span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="navbar-nav" className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/meetup">Meetup</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/history">History</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sponsors">Sponsors</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
      </div>
    );
  }
}

export default Header;
