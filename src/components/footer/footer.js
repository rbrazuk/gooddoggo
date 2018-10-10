import React from 'react';
import Nav from '../nav/nav';
import './footer.css';

export default (props) => {
  return (
    <footer>
    <nav>
      <ul className="navigation">
        <li><a href="#">About</a></li>
        <li><a href="#services">Rates & Services</a></li>
        <li><a href="#">Policies</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
      <div>Copyright ©2017 by GoodDogGo. All rights reserved.</div>

    </footer>
  )
}
