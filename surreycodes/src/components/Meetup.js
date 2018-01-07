import React, { Component } from 'react';

class Meetup extends Component {
  render(){
    return(
      <div className="container">
        <div id="meetup">
          <h1>Upcoming Events</h1>
          <p>SurreyCodes 1st Anniversary <br /> January 18, 2017 @ 6:30pm <br />Beta Colective</p>
          <button className="cr-scan-ct" type="submit">RSVP Here</button>
        </div>
      </div>
    );
  }
}

export default Meetup;
