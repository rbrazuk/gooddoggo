import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo-light.png';

import './nav.css';

export default (props) => {
  return (
    <nav className="row">
      <div className="col-sm-4">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>

      </div>
      <div className="col-sm-8">
        <ul className="navigation">
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/services">Rates & Services</NavLink></li>
          <li><NavLink to="/policies">Policies</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>



    </nav>

  )
}
