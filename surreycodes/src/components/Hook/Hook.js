import React, { Component } from 'react';
import './Hook.css';
import { NavLink } from 'react-router-dom';

class Hook extends Component {

    render(){
        return <div id="hook">
            <div>
                <h1>Peer to Peer Mentoring<br/>Tech Foundation</h1>
                <NavLink to="/fulltime">
                <button className="main-button">
                    Become a Developer
                </button>
                </NavLink>
            </div>
        </div>;
  }
}

export default Hook;
