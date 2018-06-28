import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {
  render(){
    return(
      <div id="subscribe">
        <div className="container">
          <div id="subscribe-surreycodes">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
              <input type="email" placeholder="example@surreycodes.com"></input>
              <button className="cr-scan-ct" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
