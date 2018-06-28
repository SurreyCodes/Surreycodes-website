import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Meetup from './components/Meetup/Meetup';
import Hook from './components/Hook/Hook';
import About from './components/About/About';
import Community from './components/Community';
import Subscribe from './components/Subscribe';
import Friends from './components/Friends';
import Members from './components/Members';
import Footer from './components/Footer';
import WhenLeavingView from './components/WhenLeavingView';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    alert("hey");
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <WhenLeavingView>
          {({ isLeavingView }) =>
            <Header animate={isLeavingView}/>
          }
        </WhenLeavingView>
          <article id="section-one">
            <Hook />
            <Meetup />
          </article>
          <article id="section-two">
            <About />
          </article>
          <article id="section-three">
            <div className="green-section"></div>
            <Community />
            <Members />
            <Subscribe />
            <Friends />
          </article>
        <Footer />
      </div>
    );
  }
}

export default App;
