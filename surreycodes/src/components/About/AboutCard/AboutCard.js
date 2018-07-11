import React, { Component } from 'react';
import './AboutCard.css';
import { NavLink } from 'react-router-dom';

class AboutCard extends Component{
    render () {
        return (
            <div id="AboutCard">
            <h3>By 2030 Non-Profits around BC will not require a budget to create or sustain their websites and webapps</h3>
            <NavLink to='/about-us'>
                <button className="main-button" type="button">Learn How</button>
            </NavLink>
            </div>
        )
    }


}

export default AboutCard;