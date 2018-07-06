import React, { Component } from 'react';
import Audience from '../../assets/Audience-raising-their-hands.png';
import './Hook.css';
import { withRouter } from 'react-router-dom';

class Hook extends Component {
  constructor (props){
    super(props);
    this.goFulltime = this.goFulltime.bind(this)
  }

  goFulltime() {
      this.props.history.push('/fulltime')
  }

    render(){
    return(
      <div id="hook">
        <div>
            <img src={Audience} alt="Audience Raising their hands"/>
            <h1>Peer to Peer Mentoring<br />Tech Foundation</h1>
                <button onClick={this.goFulltime} className="white-button">
                Become a Developer</button>
        </div>
      </div>
    );
  }
}

export default Hook;
