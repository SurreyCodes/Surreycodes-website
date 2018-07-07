import React, { Component } from 'react';
import './Hook.css';
import { withRouter } from 'react-router-dom';

class Hook extends Component {

  goFulltime = () => {
      this.props.history.push('/fulltime')
  };

    render(){
        return <div id="hook">
            <div>
                {/*<img src={Audience} alt="Audience Raising their hands"/>*/}
                <h1>Peer to Peer Mentoring<br/>Tech Foundation</h1>
                <button onClick={this.goFulltime} className="main-button">
                    Become a Developer
                </button>
            </div>
        </div>;
  }
}

export default Hook;
