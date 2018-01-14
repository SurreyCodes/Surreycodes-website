import React, { Component } from 'react';



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
    var hovered = !this.state.isHovered;
    var bgColor = '';
    var buttonColor = '#62AADD'
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
    var bgColor = this.state.bgColor;
    var buttonColor = this.state.buttonColor;
    var flexButton = {
      display: 'block',
      background: `${buttonColor}`
    }
    var flexPara = {
      top: '0',
      marginTop: '40px'
    }
    var flexImage = {
      display: 'none'
    }
    var cardBackground = {
      background: `${bgColor}`,
      boxShadow: '0 1px 1px 1px #000000'
    }
    return(
      <div style={this.state.isHovered ? cardBackground : null} className="flex-card" onMouseEnter={(e) => this.hovered(this.props.identity)} onMouseLeave={(e) => this.hovered(this.props.identity)}>
        <img style={this.state.isHovered ? flexImage : null} id={this.props.id} src={this.props.image} alt={this.props.alternate}></img>
          <p style={this.state.isHovered ? flexPara : null}>{this.props.text}</p>
          <button style={this.state.isHovered ? flexButton : null}>{this.props.button}</button>
      </div>
    );
  }
}

export default Card;
