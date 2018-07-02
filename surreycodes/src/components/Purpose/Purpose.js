import React, { Component } from 'react';
import IconCup from '../../assets/Icon - Blue Cup.svg';
import IconHeart from '../../assets/Icon - Green Heart.svg';
import IconPartners from '../../assets/Icon - Green partner.svg';

class Purpose extends Component {
    render (){
    return (
        <div id="Purpose">
            <h1>Community Benefits</h1>
            <div>
                <img src={IconCup} alt="Cup of Victory!"/>
                <h3>Students</h3>
                <p>Get from new coder to Full Stack and Job ready for free with a community to back your
                    knowledge.</p>
            </div>
            <div>
                <img src={IconHeart} alt="Heart of Gold!"/>
                <h3>Non Profits</h3>
                <p>Focus your resources to help our communities most in need and less in webdevelopment.</p>
            </div>
            <div>
                <img src={IconPartners} alt="Partner and help!"/>
                <h3>Partner Companies</h3>
                <p>Hire Full Stack developers with a record of teawork and self-learning that have done coding for good.</p>
            </div>
        </div>
    )
}}

export default Purpose;