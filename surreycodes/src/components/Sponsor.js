import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class Sponsor extends Component {
  render(){
    return(
      <div>
        <Header />
          <section id="sponsors">
            <div className="container">
            <h1>Sponsors</h1>
            <p> -- Images and a link to each sponsor here --</p>
            </div>
          </section>
          <Footer />
      </div>
    );
  }
}

export default Sponsor;
