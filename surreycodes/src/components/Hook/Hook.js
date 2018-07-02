import React, { Component } from 'react';
import Audience from '../../assets/Audience-raising-their-hands.png';
import './Hook.css';
import { Link } from 'react-router-dom';

class Hook extends Component {
  render(){
    return(
      <div id="hook">
        <div>
            <img src={Audience} alt="Audience Raising their hands"/>
            <h1>Peer to Peer Mentoring<br />Tech Foundation</h1>
                <button type="button">
                Become a Developer</button>
        </div>
      </div>
    );
  }
}

export default Hook;
