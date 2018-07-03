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
              <h1>Open-source Curriculum</h1>
              <h3>Founded by self-learners, for self-learners.</h3>
              <p>We believe that high quality education should be accessible to everyone. And we dedicate our existence to cultivate new developers from newbie to job-ready.</p>
              <p>The SurreyCodes Foundation welcomes all aplicants who are over 18 years old and legally entitled to work in Canada.</p>
              <h2>The Eligibility Process</h2>
              <h3>Prerequisites</h3>
              <p>In order to apply to our full-time program, we ask all applicants to extend their best effort fullfiling the list below</p>
              <ol>
                  <li>We host <a href="https://www.meetup.com/SurreyCodes/" target="_blank">regular meetups</a>, make sure to attend.</li>
                  <li>Create a GitHub account, it will help you with other prerequisites below</li>
                  <li>Join <a href="https://goo.gl/forms/SEmsu7E0sDJxs3Uq2" target="_blank">our Slack Community</a>. Make sure to note that you are a full-time program applicant in your last answer.</li>
                  <li>Open your <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp account</a>. We require you to prepare your journey as a web developer by completing the following sections of FreeCodeCamp's curriculum:
                      <ul>
                          <li>Responsive Web Design Certification
                              <ul>
                                  <li>Basic HTML and HTML5</li>
                                  <li>Basic CSS</li>
                                  <li>Responsive Web Design Principles</li>
                                  <li>Build a Tribute Page</li>
                              </ul>
                          </li>
                          <li>Javascript Algorithms And Data Structures Certification
                              <ul>
                                  <li>Basic Javascript</li>
                                  <li>ES6</li>
                                  <li>Basic Data Structures</li>
                                  <li>Basic Algorithm Scripting</li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ol>
              <button>Apply Now</button>
              <h2>Our Full-time Program</h2>
              <h3>Initial 16-week program</h3>
              <p>Our full immersion, peer-led self-learning program is designed to teach you real-life scenarios. <br/> Expect to be assigned with projects every week and present them to the rest of the cohort. Students are paired in 4 teams of 5 members. They take turns delivering code reviews and managing projects. The course covers Full Stack development using JavaScript and some it's frameworks.</p>
              <p>From week 1 to week 6 we cover the basics, Node core, and Databases. Then students focus their time on challenging projects that helps non-profits in British Columbia.</p>
              <p>We also teach other aspects and skills required to be successful, such as UX principles and project management.</p>
              <h3>Post-Studies mentoring and job-readiness program</h3>
              <p>After the program ends, graduate are expected to:</p>
              <ul>
                <li>Complete portfolio projects with local non-profit organizations</li>
                <li>Spend some time mentoring the next cohort. This includes being available on slack.</li>
                <li>Complete the job readiness week. which includes resume, cover letter and job interview preparation.</li>
                <li>Begin applying for positions with our recruitment partners.</li>
              </ul>
          </div>
          <Subscribe/>
          <Footer/>
      </div>
    );
  }
}

export default FulltimeProgram;
