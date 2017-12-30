import React, { Component } from 'react';
import Header from './Header';


class Sponsor extends Component {
  render(){
    return(
      <div>
        <Header />
          <section id="sponsors" className="anchor text-primary">
            <div className="container">
            <h1>Sponsors</h1>
            <p> -- Images and a link to each sponsor here --</p>
            </div>
          </section>
      </div>
    );
  }
}

export default Sponsor;
