import React, { Component } from 'react';

class Subscribe extends Component {
  render(){
    return(
      <div id="subscribe-surreycodes" className="container text-primary">
        <h1>Subscribe to our newsletter</h1>
        <form>
          <input type="email" placeholder="example@surreycodes.com"></input>
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
