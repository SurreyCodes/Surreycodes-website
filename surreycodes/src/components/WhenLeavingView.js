import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

class WhenLeavingView extends Component {
  state = {
    isLeavingView: false
  }

  onLeave = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.setState({
        isLeavingView: true
      })
    }
  }
  onEnter = ({ previousPosition }) => {
    if (previousPosition === Waypoint.above) {
      this.setState({
        isLeavingView: false
      })
    }
  }
  render() {
    return (
      <div>
        <Waypoint onLeave={this.onLeave} />
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isLeavingView: this.state.isLeavingView })}
      </div>
    )
  }
}

export default WhenLeavingView
