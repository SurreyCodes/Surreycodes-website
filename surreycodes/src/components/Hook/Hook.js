import React, { Component } from 'react';
import Audience from '../../assets/Audience-raising-their-hands.png';
import './Hook.css';

class Hook extends Component {
  render(){
    return(
      <div id="hook">
        <div className="hero">
         <img src={Audience} alt="Audience Raising their hands" className="img-hero"/>
            <h1>PEER TO PEER MENTORING<br />TECH FOUNDATION</h1>
        </div>
      </div>
    );
  }
}

export default Hook;
