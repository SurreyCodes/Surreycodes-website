import React, { Component } from 'react';

class Card extends Component {
  render(){
    return(
      <div className="flex-card">
        <img id={this.props.id} src={this.props.image} alt={this.props.alternate}></img>
        <div>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
