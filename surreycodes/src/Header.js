import React, { Component } from 'react';
import Logo from './assets/SurreyCodeCampLogoNew.svg';

class Header extends Component {
  render(){
    return(
      <div>
        <header id="header" className="fixed-top">
          <nav id="navbar" className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Surrey Code Camp"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i>
      </span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="navbar-nav" className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#meetup">Meetup</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#history">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">Sponsors</a>
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
