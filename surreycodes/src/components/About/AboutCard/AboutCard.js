import React, { Component } from 'react';
import './AboutCard.css';
import { NavLink } from 'react-router-dom';

class AboutCard extends Component{
    render () {
        return (
            <div id="AboutCard">
            <h1>Create software for other non profits</h1>
            <NavLink to='/about'>
                <button className="main-button" type="button">Learn How</button>
            </NavLink>
            </div>
        )
    }


}

export default AboutCard;