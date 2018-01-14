import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class FulltimeProgram extends Component {
  render(){
    return(
      <div>
      <Header />
        <div id="FulltimeProgram">
          <div className="container">
          <section className="landingSection">
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
        </div>
      <Footer />
      </div>
    );
  }
}

export default FulltimeProgram;
