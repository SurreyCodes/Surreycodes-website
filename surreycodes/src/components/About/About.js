import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render(){
    return(
      <div id="about">
          <section className="about-intro">
            <h1>Where it all started..</h1>
            <p>The SurreyCodes Community was created with the inspiration of <a href="https://www.freecodecamp.org/">freecodecamp.com</a> to cultivate peer-to-peer technology learning. We strive to provide a venue where developers and coders alike can gather and exchange knowledge to elevate our Non-Profit's approach to technology within British Columbia.</p>
          </section>
          <section className="about-why">
            <h2>We connect new Developers with non profits</h2>
            <p>Both of which gets a benefit. Making sure that the most benefit one is the community of most in need.</p>
          </section>
      </div>
    );
  }
}

export default About;
