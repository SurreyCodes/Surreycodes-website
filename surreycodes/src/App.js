import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Meetup from './Meetup';



class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <Header />
          <article id="home" className="anchor">
            <div id="hook" className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="text-center text-primary">PEER TO PEER MENTORING<br />TECH COMMUNITY</h1>
              </div>
            </div>
            <Meetup />
            <section id="about" className="anchor text-primary">
              <div className="container">
              <h1>About SurreyCodeCamp</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum lacus eget dolor feugiat, vitae semper est tristique. Duis ut ullamcorper ante, at finibus turpis. Nam pharetra turpis urna, nec ullamcorper purus laoreet ut. Donec egestas, ligula vitae tempor condimentum, ex est posuere nibh, pulvinar tempor elit enim quis enim. Fusce sodales sit amet enim eget cursus. Nunc malesuada blandit libero, eu laoreet magna tincidunt id. Etiam vulputate, erat vel condimentum ornare, massa odio venenatis nisi, sit amet lacinia quam augue sed est. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
              </div>
            </section>
            <section id="history" className="anchor text-primary">
              <div className="container">
              <h1>SurreyCodeCamp's History</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum lacus eget dolor feugiat, vitae semper est tristique. Duis ut ullamcorper ante, at finibus turpis. Nam pharetra turpis urna, nec ullamcorper purus laoreet ut. Donec egestas, ligula vitae tempor condimentum, ex est posuere nibh, pulvinar tempor elit enim quis enim. Fusce sodales sit amet enim eget cursus. Nunc malesuada blandit libero, eu laoreet magna tincidunt id. Etiam vulputate, erat vel condimentum ornare, massa odio venenatis nisi, sit amet lacinia quam augue sed est. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
              </div>
            </section>
          </article>
      <footer id="footer" className="container-fluid">
        <div className="container">
          <ul>
            <li>Our Code of Conduct</li>
            <li>Terms of use for members</li>
            <li>Sponsor Us</li>
          </ul>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
