import React, { Component } from 'react';
import './Meetup.css';
import axios from 'axios';

class Meetup extends Component {
  render(){
    return(
      <div className="container">
        <div id="meetup">
          <h1>Upcoming Events</h1>
          <div className="meetupIntegration">
            <div>
              <h2>SurreyCodes 1st Anniversary </h2>
              <p>January 18, 2017 @ 6:30pm <br />Beta Colective</p>
            </div>
            <button className="cr-scan-ct" type="submit">RSVP Here</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetup;
