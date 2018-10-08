import React from 'react';

import Nav from '../nav/nav';
import logo from './logo.png';
import placeholder from './placeholder.jpg';
import headerImage from './header.jpg';

import './header.css';

export default (props) => {
  return (
    <header className='container-flex'>
      <div className='row'>
        <div className='col-sm-6'>
          <img className="header-logo" src={logo} />
        </div>
        <div className='col-sm-6 header-contact'>
          <Nav />
        </div>
      </div>
        <div className="row">
          <div className='col-sm-12 header-content'>
            <p>Philadelphia dog-walking service</p>
            <button className="contact-button">Schedule</button>
          </div>
        </div>
        <i className="fas fa-chevron-down down-icon"></i>
    </header>
  )
}
