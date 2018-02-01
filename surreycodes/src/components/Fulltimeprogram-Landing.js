import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SurreyCodesMembers from '../assets/SurreycodesMembers.svg';
import IconCup from '../assets/Icon - Blue Cup.svg';
import IconHeart from '../assets/Icon - Green Heart.svg';
import IconPartners from '../assets/Icon - Green partner.svg';

class FulltimeProgram extends Component {
  render(){
    return(
      <div>
      <Header />
        <div id="FulltimeProgram">
          <div className="container">
          <section className="landingSection">
              <img src={SurreyCodesMembers} alt="Our Campers Studying and Nonprofit can submit their projects" className="fulltime-program-hero"/>
            <div>
              <h1>LEARN TO CODE FOR FREE</h1>
              <h2>By Supporting Non-Profit Projects</h2>
            </div>
            <div>
                <button>KickStart Campaign</button>
                <button>See Available Projects</button>
            </div>
          </section>
              <section className="landingSection">
              <h1>Community Benefits</h1>
              <div><img src={IconCup} alt="Cup of Victory!"/>
                  <h3>Students</h3>
                  <p>Get from new coder to Full Stack and Job ready for free with a community to back your knowledge.</p>
              </div>
              <div><img src={IconHeart} alt="Heart of Gold!"/>
                  <h3>Non Profits</h3>
                  <p>Focus your resources to help our communities most in need and less in webdevelopment.</p>
              </div>
              <div><img src={IconPartners} alt="Partner and help!"/>
                  <h3>Partner Companies</h3>
                  <p>Hire Full Stack developers with a record of teawork and self-learning that have done coding for good.</p>
              </div>
              </section>
          <section>
            <h1>Learn To Code for free</h1>
            <p>Learn to code with others in a great space, while you help non profits with their technological approach.</p>
          </section>
            </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default FulltimeProgram;
