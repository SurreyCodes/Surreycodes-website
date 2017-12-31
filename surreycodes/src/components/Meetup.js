import React, { Component } from 'react';

class Meetup extends Component {
  render(){
    return(
      <div id="meetup" className="text-primary">
        <div className="container">
          <h1>Upcoming Events</h1>
          <p>SurreyCodes 1st Anniversary <br /> January 18, 2017 @ 6:30pm <br />Beta Colective</p>
          <button className="btn btn-primary" type="button" name="button">RSVP Here</button>
        </div>
      </div>
    );
  }
}

export default Meetup;
