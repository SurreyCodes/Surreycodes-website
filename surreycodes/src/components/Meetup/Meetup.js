import React, { Component } from 'react';
import './Meetup.css';

class Meetup extends Component {
  render(){
    return(
        <div id="meetup">
          <h1>Upcoming Events</h1>
              <h2>SurreyCodes 1st Anniversary </h2>
              <p>January 18, 2017 @ 6:30pm <br />Beta Colective</p>
            <button className="main-button" type="submit">RSVP Here</button>
        </div>
    );
  }
}

export default Meetup;