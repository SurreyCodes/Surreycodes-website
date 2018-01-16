import React, { Component } from 'react';

class Members extends Component {
  render(){
    return(
      <div id="member">
        <div className="container">
          <h1>Meet Our Members</h1>
          <p className="member-statements">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius iaculis enim, a sollicitudin neque commodo ut. Curabitur sit amet leo arcu. Mauris luctus magna non tortor bibendum scelerisque."</p>
          <div className="member-images">
            <div className="circles">Image</div>
            <div className="circles">Image</div>
            <div className="circles">Image</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
