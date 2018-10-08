import React from 'react';

import logo from './logo.png';
import placeholder from './placeholder.jpg'

import './header.css';

export default (props) => {
  return (
    <header>
      <div>
        <div>
          <img className="header-logo" src={logo} />
        </div>

        <div className="header-content">
          <p>Philadelphia dog-walking service</p>
          <button className="contact-button">Schedule</button>
        </div>
        <i className="fas fa-chevron-down down-icon"></i>
      </div>
    </header>
  )
}
