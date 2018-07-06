import React, { Component } from 'react';
import './Cards.css';



class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      bgColor: '',
      buttonColor: ''
    };
    this.hovered = this.hovered.bind(this);
  }

  hovered(id){
    let hovered = !this.state.isHovered;
    let bgColor = '';
    let buttonColor = '#62AADD';
    if (id === 'fulltime'){
      bgColor = '#005725';
    } else if (id === 'slack') {
      bgColor = '#DFA22F';
    } else if (id === 'job') {
      bgColor = '#62AADD';
      buttonColor = '#80B05A'
    } else if (id === 'hack') {
      bgColor = '#80B05A';
    }
    this.setState({
      isHovered: hovered,
      bgColor: bgColor,
      buttonColor: buttonColor
    });
  }



  render(){
    let bgColor = this.state.bgColor;
    let buttonColor = this.state.buttonColor;
    let flexButton = {
      display: 'block',
      background: `${buttonColor}`// used for the job button mainly.
    };
    let flexPara = {
      top: '0',
      marginTop: '40px'
    };
    let flexImage = {
      display: 'none'
    };
    let cardBackground = {
      background: `${bgColor}`,
      boxShadow: '0 1px 1px 1px #000000'
    };
    return(
      <div style={this.state.isHovered ? cardBackground : null} className="flex-card" onMouseEnter={(e) => this.hovered(this.props.identity)} onMouseLeave={(e) => this.hovered(this.props.identity)}>
        <img style={this.state.isHovered ? flexImage : null} id={this.props.id} src={this.props.image} alt={this.props.alternate}/>
          <p style={this.state.isHovered ? flexPara : null}>{this.props.text}</p>
          <a href={this.props.location} className="cr-scan-ct" style={this.state.isHovered ? flexButton : null}>{this.props.button}</a>
      </div>
    );
  }
}

export default Card;
