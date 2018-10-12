import React from 'react';
import Service from '../service/service';

import './services.css';

export default (props) => {
  return (
    <div className='container-flex'>
      <section className="row" id="services">
        <div className='col-sm-12'>
          <h1>Rates & Services</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Visit Length</th>
              <th>1 - 4 times per week</th>
              <th>5 times per week</th>
              <th>Additional Pets</th>
              <th>Medication</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>10 Minutes</td>
              <td>$10</td>
              <td>-</td>
              <td>$3 per dog or up to 3 cats/small animals</td>
              <td>$3 - unless given in food</td>
            </tr>
            <tr>
              <td>20 Minutes</td>
              <td>$14</td>
              <td>$13</td>
              <td>$3 per dog or up to 3 cats/small animals</td>
              <td>$3 - unless given in food</td>
            </tr>
            <tr>
              <td>30 Minutes</td>
              <td>$17</td>
              <td>$16</td>
              <td>$3 per dog or up to 3 cats/small animals</td>
              <td>$3 - unless given in food</td>
            </tr>
            <tr>
              <td>60 Minutes</td>
              <td>$30</td>
              <td>$28</td>
              <td>$3 per dog or up to 3 cats/small animals</td>
              <td>$3 - unless given in food</td>
            </tr>
          </tbody>
        </table>



        <section className="row">
          <div className='col-sm-4'>
            <h4>Overnight Visits</h4>
            <ul className='section-list'>
              <li>8AM to 8PM</li>
              <li>Includes feeding, one walk in the evening and one in the morning, with lots of cuddles and mental stimulation</li>
              <li>$60 Monday through Thursday</li>
              <li>$65 Friday through Sunday</li>
            </ul>
          </div>
          <div className='col-sm-4'>
            <h4>Manners practiced</h4>
            <ul className='section-list'>
              <li>Eye Contact (foundation behavior)</li>
              <li>Wait (instead of bolting out the door or across the street)</li>
              <li>Loose Leash Walking (not pulling ahead or dragging behind, combined with eye contact/auto check-in)</li>
              <li>Sit (for polite greeting and used with Wait)</li>
              <li>Leave It (don’t pick up that dirty pizza crust on the sidewalk)</li>
              <li>Bite Inhibition/Appropriate Chewing (for puppies)</li>
            </ul>
          </div>
          <div className='col-sm-4'>
            <h4>Housekeeping by request</h4>
            <ul className='section-list'>
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

      </section>
    </div>
  )
}
