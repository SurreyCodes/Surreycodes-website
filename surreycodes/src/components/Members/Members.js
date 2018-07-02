import React, { Component } from 'react';
import './Members.css';

class Members extends Component {
  render(){
    return(
      <div id="member">
        <h1>Member's Testimonials</h1>
        <p className="member-statements">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius iaculis enim, a sollicitudin neque commodo ut. Curabitur sit amet leo arcu. Mauris luctus magna non tortor bibendum scelerisque."</p>
        <div className="member-images">
          <div className="circles">Member 1</div>
          <div className="circles">Member 2</div>
          <div className="circles">Member 3</div>
        </div>
      </div>
    );
  }
}

export default Members;
