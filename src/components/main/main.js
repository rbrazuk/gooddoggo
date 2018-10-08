import React from 'react';

import doggo from './doggo.jpg';
import psiLogo from './psi_member_logo_color.jpg';
import redCross from './red_cross.png';

import './main.css';

export default (props) => {
  return (
    <main>
      <div className='container-flex'>
        <section className="row">
          <div className='col-sm-12'>
            <h1>About</h1>
            <p>Hello and welcome to Good Dog Go, LLC. My name is Stacey Plattenberger. I started Good Dog Go to provide a comprehensive and enriching dog walking experience for your beloved canine companions. Dogs are always learning whether or not we are actively teaching them. As a pet professional, part of my job is to make sure the right behaviors are being reinforced. Manners-minded dog walking means skills such as providing eye contact, waiting at doorways and corners, walking on a loose leash, and sitting (instead of jumping) will be positively reinforced through each and every interaction I have with your dog.</p>
            <p>Services with Good Dog Go are meant to compliment training guided by a professional dog trainer, not to replace it. See Resources page for referrals. </p>
            <p>Good Dog Go provides services for the Washington Square neighborhood of Philadelphia.</p>
            <p>I am insured and bonded through the Business Insurers of the Carolinas via my membership with Pet Sitters International (PSI). Additionally, I have been Pet First Aid Certified through the American Red Cross.</p>
          </div>
        </section>

        <section className="row">
          <div className='col-sm-12'>
            <h1>Rates</h1>
            <ul>
              <li>10-minute visit = $10 (cats/small animals and clients along the perimeter of Washington Square Park only)</li>
              <li>20-minute visit 1-4x/wk = $14;  5x/wk and cat visits = $13</li>
              <li>30-minute visit, 1-4x/wk = $17; 5x/wk and cat visits = $16</li>
              <li>60-minute visit, 1-4x/wk = $30; 5x/wk and cat visits = $28</li>
              <li>Overnight (8PM-8AM), includes feeding, one walk in the evening and one in the morning, with lots of cuddles and mental stimulation = $60 Mon-Thurs, $65 Fri-Sun</li>
              <li>Additional pet(s) = $3 per dog or up to 3 cats/small animals; owners with two large dogs are encouraged to split a longer visit.</li>
              <li>Medication (unless given in food) = $3</li>
            </ul>
          </div>
        </section>

        <section className="row">
          <div className='col-sm-6'>
            <h3>Manners practiced</h3>
            <ul>
              <li>Eye Contact (foundation behavior)</li>
              <li>Wait (instead of bolting out the door or across the street)</li>
              <li>Loose Leash Walking (not pulling ahead or dragging behind, combined with eye contact/auto check-in)</li>
              <li>Sit (for polite greeting and used with Wait)</li>
              <li>Leave It (don’t pick up that dirty pizza crust on the sidewalk)</li>
              <li>Bite Inhibition/Appropriate Chewing (for puppies)</li>
            </ul>
          </div>
          <div className='col-sm-6'>
            <h3>Housekeeping by request</h3>
            <ul>
              <li>Turn on/off lights, radio, and/or TV</li>
              <li>Open/close blinds and curtains</li>
              <li>Bring in the mail</li>
              <li>Water plants</li>
              <li>Take out the trash/recycling</li>
              <li>Clean food and water bowls</li>
              <li>Refresh water</li>
              <li>Feed as instructed (includes administering medication through food)</li>
              <li>Text or email updates after each visit (per request)</li>
              <li>Scoop litter box (for cat visits)</li>
            </ul>
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-12'>
            <h1>Policies</h1>
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-12'>
            <h1>Resources</h1>
            ROW
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-12'>
            <h1>Contact</h1>
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-12'>
            ROW
          </div>
        </section>
      </div>
    </main>
  )
}
