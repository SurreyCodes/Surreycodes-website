import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render(){
    return(
      <footer id="footer">
        <div className="container">
          <ul className="footer-list">
            <Link to="/codeofconduct">Our Code of Conduct</Link>
            <li>{' • '}</li>
            <Link to="/Volunteer">Volunteer with Us</Link>
            <li>{' • '}</li>
            <Link to="/Sponsor">Sponsor Us</Link>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
