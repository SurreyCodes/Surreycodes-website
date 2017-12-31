import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Meetup from './components/Meetup';
import Hook from './components/Hook';
import About from './components/About';
import Community from './components/Community';
import Subscribe from './components/Subscribe';
import Friends from './components/Friends';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <article id="section-one">
            <Hook />
            <Meetup />
          </article>
          <article id="section-two">
            <About />
          </article>
          <article id="section-three">
            <Community />
            <Subscribe />
            <Friends />
          </article>
        <Footer />
      </div>
    );
  }
}

export default App;
