import React from 'react';
import Nav from '../nav/nav';
import { NavLink } from 'react-router-dom';
import './footer.css';

export default (props) => {
  return (
    <footer className="row">
      <div className="col-sm-12">
      <nav>
        <ul className="navigation footer-nav">
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/services">Rates & Services</NavLink></li>
          <li><NavLink to="/policies">Policies</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div className="col-sm-12">
        Copyright ©2017 by GoodDogGo. All rights reserved.
      </div>
    </footer>
  )
}
