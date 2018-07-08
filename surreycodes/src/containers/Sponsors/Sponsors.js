import React, { Component } from 'react'
import IconSpeaker from '../../assets/Icon Speaker.svg'
import Typow from '../../assets/Typow.svg'
import BetaCollective from '../../assets/BetaCollective.svg'
import './Sponsors.css'
import { NavLink } from 'react-router-dom';

class Sponsors extends Component {
  render() {
    return (
      <div id="Sponsors">
        <section className="calltoaction">
          <img src={IconSpeaker} alt="A Big interesting speaker!" />
          <h3>
            British Columbia’s Non-profits spends about $100 MM dollars every
            year in tech support. Those are $100MM dollars that could go towards
            the most in need.
          </h3>
          <h1>We are changing this. Want to help?</h1>
        </section>
        <section className="howtohelp">
          <h1>We are preparing the developers of the future</h1>
          <p>Our students learn by doing. They prepare, code and improve web applications for good. By doing this, non-profits in British Columbia benefits of having low-cost websites and apps. At the same time, our students build a portfolio of real-wold experiences.</p>
          <p>Each place in our full time program costs about $4,000.00 to provide. We do our best to keep these costs low and cultivate high quality developers at the same time.</p>
          <h1>Your contribution creates a 10x effect.</h1>
          <p>High quality graduates will look up to your company. And non-profits will have more budget to do good.</p>
          <h1>Every year, we accept a limited amount of Sponsors</h1>
        </section>
        <section className="backers">
            <h2>Platinum Sponsor</h2>
            <p> -- Open -- </p>
            <h2>Gold Sponsors</h2>
            <p> -- Open -- </p>
            <p> -- Open -- </p>
            <h2>Silver Sponsors</h2>
            <p> -- Open -- </p>
            <p> -- Open -- </p>
            <p> -- Open -- </p>
            <h2>Meetup Sponsors</h2>
          <a href="http://betacollective.ca/">
            <img src={BetaCollective} width="80" height="80" alt="Beta Collective" />
          </a>
          <a href="https://typow.ca">
            <img src={Typow} width="80" height="80" alt="Typow" />
          </a>
            <h3>Know a Non-Profit that could benefit from our program? tell them to submit a project</h3>
            <NavLink to='/'>
                <button className="main-button">Non-Profits</button>
            </NavLink>
        </section>
      </div>
    )
  }
}

export default Sponsors
