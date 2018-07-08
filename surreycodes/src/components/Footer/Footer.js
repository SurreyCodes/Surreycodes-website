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
            <Link to="/codeofconduct">Our Code of Conduct</Link>
            <span>{'•'}</span>
            <Link to="/team">Volunteer with Us</Link>
            <span>{'•'}</span>
            <Link to="/sponsors">Sponsor Us</Link>
      </footer>
    );
  }
}

export default Footer;
