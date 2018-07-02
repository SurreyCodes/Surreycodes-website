import React, { Component } from 'react';
import Slack from '../../assets/slack-logo.svg';
import Fulltime from '../../assets/SurreyCodesFullTimeProgram.svg';
import Hack4Good from '../../assets/SurreyCodeCampLogoNew.svg';
import Job from '../../assets/briefcase-lightblue.svg';
import Card from './Cards/Card';


class Features extends Component {

  render(){
    return(
        <div className="container">
          <div className="flex-card-container">
            <Card location="/fulltime" identity="fulltime" button="Enroll Now" id="fulltime-card-image" image={Fulltime} text="Our Full Time Program" alternate="Full Time Program"/>
            <Card location="https://surreycodes.slack.com" identity="slack" button="Join Here" image={Slack} text="Our Slack Channel" alternate="Slack" />
            <Card location="https://surreycodes.slack.com" identity="job" button="Search" image={Job} text="Jobs &nbsp;Available" alternate="Jobs" />
            <Card location="https://surreycodes.slack.com" identity="hack" button="Hackathon" image={Hack4Good} text="#Hack 4 Good" alternate="Hack 4 Good" />
          </div>
        </div>
    );
  }
}

export default Features;
