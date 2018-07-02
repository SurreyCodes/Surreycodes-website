import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import IconSpeaker from '../../assets/Icon Speaker.svg';


class Sponsors extends Component {
  render(){
    return(
      <div>
        <Header />
          <section className="calltoaction">
              <img src={IconSpeaker} alt="A Big interesting speaker!"/>
              <p>British Columbia’s Non-profits spends about $100 MM dollars every year in tech support. Those are $100MM dollars that could go towards the most in need.</p>
          </section>
          <section id="sponsors">
            <h1>Sponsors</h1>
            <p> -- Images and a link to each sponsor here --</p>
          </section>
          <Footer />
      </div>
    );
  }
}

export default Sponsors;
