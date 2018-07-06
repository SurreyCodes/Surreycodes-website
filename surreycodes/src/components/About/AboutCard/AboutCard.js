import React, { Component } from 'react';
import './AboutCard.css';
import { NavLink } from 'react-router-dom';

class AboutCard extends Component{
    render () {
        return (
            <div id="AboutCard">
            <h1>Support BC Non-Profits tech<br/>By Learning to Code</h1>
            <NavLink to='/about'>
                <button type="button">Learn How</button>
            </NavLink>
            </div>
        )
    }


}

export default AboutCard;