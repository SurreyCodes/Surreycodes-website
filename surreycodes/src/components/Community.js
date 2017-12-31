import React, { Component } from 'react';
import Slack from '../assets/slack-logo.svg';
import Fulltime from '../assets/SurreyCodesFullTimeProgram.svg';
import Hack4Good from '../assets/SurreyCodeCampLogoNew.svg';


class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: {Fulltime}
    };
  }
  render(){
    return(
      <div id="community">
        <div className="container">
          <div>
            <Card image={this.state.image} text="Our Full Time Program" alternate="Full Time Program"/>
            <Card image={Slack} text="Our Slack Channel" alternate="Slack" />
            <Card image={Slack} text="Jobs Available" alternate="Jobs" />
            <Card image={Hack4Good} text="#Hack 4 Good" alternate="Hack 4 Good" />
          </div>
          <div className="members">
            <h2>Meet Out Members</h2>
            <p>Statements here.</p>
            <p>Member images here.</p>
          </div>
        </div>
      </div>
    );
  }
}

class Card extends Component {
  render(){
    return(
      <div>
        <img className="img-surreycodes" src={this.props.image} alt={this.props.alternate}></img>
        <div>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Community;
