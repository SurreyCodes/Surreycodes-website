import React, { Component } from 'react';
import SurreyCodesMembers from '../../assets/SurreyCodesMembers.jpg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './FulltimeProgram.css';
import Subscribe from "../../components/Subscribe/Subscribe";


class FulltimeProgram extends Component {
  render(){
      return (
      <div id="FulltimeProgram">
          <Header/>
          <section className="fulltime-landingSection">
              <img src={SurreyCodesMembers} alt="Our Campers Studying and Nonprofit can submit their projects" />
              <div className="title-landingSection">
                  <h1>LEARN TO CODE</h1>
                  <h3>By Supporting Non-Profit Projects</h3>
                  <div className="button-container">
                  <button>Apply</button>
                  <button>Projects</button>
                  </div>
              </div>
          </section>
          <div>
              <h3>Cutting Edge Open-source Curriculum</h3>
              <h3>Self-learning FTW!</h3>
              <p>The SurreyCodes Foundation was founded by self-learners, for self-learners.</p>
              <p>We believe that high quality education should be accessible to everyone. Only though our meetups new developers have gone from newbie to job-ready. And they stay to mentor new developers on the journey they know.</p>
              <p>The SurreyCodes Foundation welcomes all aplicants who are over 18 years old and legally entitled to work in Canada.</p>
              <h2>The Eligibility Process</h2>
              <h3>Prerequisites</h3>
              <p>In order to apply to our fulltime program, we ask all applicants to extend their best effort fullfiling the list below</p>
              <ol>
                  <li>We host <a href="https://www.meetup.com/SurreyCodes/" target="_blank">regular meetups</a>, make sure to attend.</li>
                  <li>Create a GitHub account, it will help you with other prerequisites below</li>
                  <li>Join <a href="https://goo.gl/forms/SEmsu7E0sDJxs3Uq2" target="_blank">our Slack Community</a>. Make sure to note that you are a fulltime program applicant in your last answer.</li>
                  <li>We require you to prepare your journey as a web developer by completing the following sections of FreeCodeCamp's curriculum:
                      <ul>
                          <li></li>
                          <li></li>
                      </ul>
                  </li>
              </ol>
              <h2>Our 16 weeks fulltime program</h2>
          </div>
          <Subscribe/>
          <section className="backers">
              <h1>These companies are already involved:</h1>
              <a href=""><img src="" alt="Beta Collective"/></a>
              <a href=""><img src="" alt="Typow Media"/></a>
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
          </section>
          <Footer/>
      </div>
    );
  }
}

export default FulltimeProgram;
