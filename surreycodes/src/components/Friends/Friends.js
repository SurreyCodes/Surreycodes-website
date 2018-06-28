import React, { Component } from 'react';
import Codepen from '../../assets/codepen-logo.svg';
import MediaTemple from '../../assets/mediatemple-logo.svg';
import GitHub from '../../assets/github-logo.svg';
import './Friends.css';

class Friends extends Component {
  render(){
    return(
      <div id="friends-surreycodes" className="container">
        <h1>Friends of the Community</h1>
        <div className="friend-list">
          <i id="left-arrow" className="fa fa-caret-left"></i>
          <i id="right-arrow" className="fa fa-caret-right"></i>
          <div className="circles"><img src={Codepen} alt="Codepen"></img></div>
          <div className="circles"><img src={GitHub} alt="Github"></img></div>
          <div className="circles"><img src={MediaTemple} alt="MediaTemple"></img></div>
        </div>
      </div>
    );
  }
}

export default Friends;
