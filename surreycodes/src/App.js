import React, { Component } from 'react'
import './App.css'
import Meetup from './components/Meetup/Meetup'
import Hook from './components/Hook/Hook'
import Features from './components/Features/Features'
import Subscribe from './components/Subscribe/Subscribe'
import Friends from './components/Friends/Friends'
import Members from './components/Members/Members'
import AboutCard from './components/About/AboutCard/AboutCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <article id="section-one">
          <Hook />
          <AboutCard />
        </article>
        <article id="section-two">
          <Meetup />
        </article>
        <article id="section-three">
          <div className="green-section" />
          <Features />
          <Members />
          <Subscribe />
          <Friends />
        </article>
      </div>
    )
  }
}

export default App
