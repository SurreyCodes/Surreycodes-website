import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FulltimeProgramLanding from './FulltimeProgramLanding';
import Fulltime from '../assets/SurreyCodesFullTimeProgram.svg';

class FulltimeProgram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landing: true
    };
  }
  render(){
    let fulltime;
    if (this.state.landing){
      fulltime = <FulltimeProgramLanding />;
    } else {
      fulltime =
      <div id="FulltimeProgram">
        <div className="container">
        <section className="landingSection">
            <img src={Fulltime} alt="Our Campers Studying and Nonprofit can submit their projects" className="fulltime-program-hero"/>
          <div>
            <h1>Study with Us</h1>
            <button>Enroll Today</button>
          </div>
          <div>separation line</div>
          <div>
            <h1>Non Profit Graduation Project</h1>
            <button>Submit One</button>
          </div>
        </section>
        <section>
          <h1>Learn To Code for free</h1>
          <p>Learn to code with others in a great space, while you help non profits with their technological approach.</p>
        </section>
          </div>
      </div>;
    }
    return(
      <div>
      <Header />
        {fulltime}
      <Footer />
      </div>
    );
  }
}

export default FulltimeProgram;
