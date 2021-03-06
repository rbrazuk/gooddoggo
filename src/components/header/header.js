import React from 'react';

import Nav from '../nav/nav';
import logo from './logo-light.png';
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
          
        </div>
      </div>
        <div className="row">
          <div className='col-sm-12 header-content'>
            <p>A one-sentence blurb would <br />look really nice right about here</p>
            <a href="#contact"><button className="contact-button">Schedule</button></a>
          </div>
        </div>
        <a href="#about"><i className="fas fa-chevron-down down-icon"></i></a>
    </header>
  )
}
