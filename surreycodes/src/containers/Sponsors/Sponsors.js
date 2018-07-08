import React, { Component } from 'react'
import IconSpeaker from '../../assets/Icon Speaker.svg'
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
            <p></p>
            <h1>Current Sponsors</h1>
          <p> -- Images and a link to each sponsor here --</p>
        </section>
        <section className="backers">
          <h1>These companies are already involved:</h1>
          <a href="">
            <img src="" alt="Beta Collective" />
          </a>
          <a href="">
            <img src="" alt="Typow Media" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
            <p>Know a Non-Profit that could benefit from our program? tell them to submit a project</p>
            <NavLink to='/'>
                <button className="main-button">Non-Profits</button>
            </NavLink>
        </section>
      </div>
    )
  }
}

export default Sponsors
