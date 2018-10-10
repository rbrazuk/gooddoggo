import React from 'react';

import './nav.css';

export default (props) => {
  return (
    <nav>
      <ul className="navigation">
        <li><a href="#">About</a></li>
        <li><a href="#services">Rates & Services</a></li>
        <li><a href="#">Policies</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}
