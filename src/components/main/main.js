import React from 'react';

import doggo from './doggo.jpg';
import psiLogo from './psi_member_logo_color.jpg';
import redCross from './red_cross.png';

import './main.css';

export default (props) => {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className="col-sm-8">
            <p>Hello and welcome to Good Dog Go, LLC. My name is Stacey Plattenberger. I started Good Dog Go to provide a comprehensive and enriching dog walking experience for your beloved canine companions. Dogs are always learning whether or not we are actively teaching them. As a pet professional, part of my job is to make sure the right behaviors are being reinforced. Manners-minded dog walking means skills such as providing eye contact, waiting at doorways and corners, walking on a loose leash, and sitting (instead of jumping) will be positively reinforced through each and every interaction I have with your dog.</p>
            <p>Services with Good Dog Go are meant to compliment training guided by a professional dog trainer, not to replace it. See Resources page for referrals. </p>
            <p>Good Dog Go provides services for the Washington Square neighborhood of Philadelphia.</p>
            <p>I am insured and bonded through the Business Insurers of the Carolinas via my membership with Pet Sitters International (PSI). Additionally, I have been Pet First Aid Certified through the American Red Cross.</p>

          </div>
          <div className="col-sm-4 sidebar">
            <p className="sidebar-header">Member of</p>
            <a href="http://www.petsit.com">
              <img className="sidebar-image" src={psiLogo} />
            </a>
            <p className="sidebar-header">Insured and Bonded Through</p>
            <a href="https://www.redcross.org/take-a-class/cpr/wilderness-sports">
              <img className="sidebar-image" src={redCross} />
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}
