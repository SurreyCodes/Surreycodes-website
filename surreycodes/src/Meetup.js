import React, { Component } from 'react';

class Meetup extends Component {
  render(){
    return(
      <div>
        <section id="meetup" className="anchor">
          <div className="container">
            <h1 className="text-primary">Meetup</h1>
            <div className="row">
              <div id="next-meetup" className="col-lg-8 text-primary">
                <h4>Upcoming Events</h4>
                <p>SurreyCodeCamp 1st Anniversary</p>
                <p>January 17, 2017 @ 6:30pm</p>
                <p>Beta Colective</p>
              </div>
              <div id="meetup-btn" className="col-lg-4">
                <button className="btn btn-primary" type="button" name="button">RSVP Here</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Meetup;
