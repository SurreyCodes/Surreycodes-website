import React, { Component } from 'react';

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
              <li>Our Code of Conduct</li>
              <li>{'• '}</li>
              <li>Volunteer with Us</li>
              <li>{'• '}</li>
              <li>Sponsor Us</li>
            </ul>
          </div>
        </footer>
    );
  }
}

export default Footer;
