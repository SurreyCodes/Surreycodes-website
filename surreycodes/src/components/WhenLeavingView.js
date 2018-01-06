import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenLeavingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLeavingView: false
    };
    this.onLeave = this.onLeave.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onLeave({ currentPosition }){
    if (currentPosition === Waypoint.above) {
      this.setState({
        isLeavingView: true
      });
    }
  }
  onEnter({ previousPosition }){
    if (previousPosition === Waypoint.above) {
      this.setState({
        isLeavingView: false
      });
    }
  }
  render(){
    return(
      <div>
        <Waypoint onLeave={this.onLeave}></Waypoint>
        <Waypoint onEnter={this.onEnter}></Waypoint>
        {this.props.children({isLeavingView: this.state.isLeavingView})}
      </div>
    );
  }
}

export default WhenLeavingView;
