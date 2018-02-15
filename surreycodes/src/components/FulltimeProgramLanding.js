import React, { Component } from 'react';
import IconCup from '../assets/Icon - Blue Cup.svg';
import IconHeart from '../assets/Icon - Green Heart.svg';
import IconPartners from '../assets/Icon - Green partner.svg';
import IconSpeaker from '../assets/Icon Speaker.svg';

// import SurreyCodesMembers from '../assets/SurreycodesMembers.svg';
//
// This Image is Corrupt ^^^^^^^




class FulltimeProgramLanding extends Component {
  render(){
      return (
      <div>
          <section className="fulltime-landingSection">
              <img src="" alt="Our Campers Studying and Nonprofit can submit their projects" />
              <div className="title-landingSection">
                  <h1>LEARN TO CODE FOR FREE</h1>
                  <h3>By Supporting Non-Profit Projects</h3>
                  <div className="button-container">
                      <button>KickStart Campaign</button>
                  <button>Available Projects</button>
              </div>
                  </div>
          </section>
          <section className="fulltime-features">
              <h1>Community Benefits</h1>
              <div className="feature">
                  <img src={IconCup} alt="Cup of Victory!"/>
                  <h3>Students</h3>
                  <p>Get from new coder to Full Stack and Job ready for free with a community to back your
                      knowledge.</p>
              </div>
              <div className="feature">
                  <img src={IconHeart} alt="Heart of Gold!"/>
                  <h3>Non Profits</h3>
                  <p>Focus your resources to help our communities most in need and less in webdevelopment.</p>
              </div>
              <div className="feature">
                  <img src={IconPartners} alt="Partner and help!"/>
                  <h3>Partner Companies</h3>
                  <p>Hire Full Stack developers with a record of teawork and self-learning that have done coding for good.</p>
              </div>
          </section>
          <section className="calltoaction">
              <img src={IconSpeaker} alt="A Big interesting speaker!"/>
              <p>British Columbia’s Non-profits spends about $100 MM dollars every year in tech support. Those are $100MM dollars that could go towards the most in need.</p>
          </section>
          <section className="subscribe">
              <h1>Help us raise the funds we need to make this come true</h1>
              <input type="email" placeholder="example@surreycodes.com"></input>
              <button className="cr-scan-ct" type="submit">SUBSCRIBE</button>
          </section>
          <section className="backers">
              <h1>These companies are already involved:</h1>
              <a href=""><img src="" alt="Beta Collective"/></a>
              <a href=""><img src="" alt="Microsoft Corporation"/></a>
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
          </section>
      </div>
    );
  }
}

export default FulltimeProgramLanding;
