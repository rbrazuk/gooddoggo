import React, { Component } from 'react';

import Service from '../service/service';
import doggo from './doggo2.jpg';
import psiLogo from './psi_member_logo_color.jpg';
import redCross from './red_cross.png';
import aboutPic from './about.jpg';

import './main.css';
import '../service/service.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className='container-flex'>
          <section className="row">
            <div className='col-sm-6'>
              <h3>Manners practiced</h3>
              <ul className='section-list'>
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



          <section className='row' id="resources">
            <div className='col-sm-12'>
              <h1>Resources</h1>
            </div>
            <div className='col-sm-6'>
              <h4>Positive Reinforcement Dog Trainers <br /> and Animal Behaviorists</h4>
              <ul className="section-list">
                <li>
                  <a href="http://www.apdt.com/">APTD (Association of Professional Dog Trainers)</a> - Search for Certified Professional Dog Trainers (CPDT-KA) in your area.
                </li>
                <li>
                  <a href="http://www.dogtraininginthecity.com/">Carol Siegrist</a> - Offers several levels of private training, including classes tailored specifically for reactive dogs and ‘pitbull’ breeds.
                </li>
                <li>
                  <a href="http://www.opbarks.com/">Opportunity Barks</a> - Offers classes for all levels, including agility and tricks classes, as well as private training instructed by several certified trainers.
                </li>
                <li>
                  <a href="http://www.k-9training.org/">Patricia Bentz</a> - Offers Nose Work classes at WAG as well as private training.
                </li>
                <li>
                  <a href="http//tuffpuptraining.com/">Tuff Pup Training</a> - Offers private training as well as Day Training.
                </li>
                <li>
                  <a href="http://www.reisnervetbehavior.com/">Dr. Ilana Reisner</a> – Certified Applied Animal Behaviorists for serious behavior issues.
                </li>
              </ul>

              <h4>Veterinary Hospitals</h4>
              <ul className="section-list">
                <li>
                  <a href="http://www.centercityvet.com/">Center City Veterinary Hospital</a> - Located at 37 S. 3rd St. (Old City)
                </li>
                <li>
                  <a href="http://www.companion-pets.com/">Companion Pet Hospital</a> – Located at 1524 S. 5th St. (South Phila)
                </li>
              </ul>

              <h4>Emergency Veterinary Hospitals</h4>
              <ul className="section-list">
                <li>
                  <a href="http://www.vsecvet.com/">VSEC</a> – 1114 S. Front St. / 267-800-1950
                </li>
                <li>
                  <a href="http://www.vet.upenn.edu/ryanveterinaryhospital/EmergencyServices247/tabid/1563/Default.aspx">VHUP</a> - 3900 Spruce St.  / 215-746-8911
                </li>
                <li>
                  <a href="http://www.rbvhcherryhill.net/">RBVH</a> – 1425 Marlton Pike E  Cherry Hill, NJ  / 856-429-4394
                </li>

              </ul>
            </div>
            <div className='col-sm-6'>
            <h4>Find A New Companion</h4>
            <ul className="section-list">
              <li>
                Finding a good breeder - <a href="http://www.humanesociety.org/issues/puppy_mills/tips/finding_responsible_dog_breeder.html">HSUS checklist</a> - <a href="http://www.youtube.com/watch?v=yZMegQH1SPg">BBC documentary about purebreds</a>
              </li>
              <li>
                <a href="http://www.petfinder.com/">Petfinder</a> - Purebred and mixed breeds from all over the country need a forever home.
              </li>
              <li>
                <a href="http://www.acctphilly.org/">ACCT (Animal Care and Control Team</a> - The region’s largest open-admission shelter. Shelter and adoption center in North Philly.
              </li>
              <li>
                <a href="http://www.pspca.org/">PSPCA (Pennsylvania Society for the Prevention of Cruelty to Animals)</a> - Philadelphia’s oldest animal shelter and the organization seen on Animal Cops Philadelphia and Philly Undercover. Adoption centers in North Philly and Fishtown.
              </li>
              <li>
                <a href="http://www.phillypaws.org/">PAWS (Philadelphia Animal Welfare Society)</a> - Philadelphia’s largest no-kill rescue that operates a high-volume, low-cost clinic. Adoption centers located in Old City and Northeast Philly. The Wellness clinic and shelter is located in Gray’s Ferry.
              </li>
              <li>
                <a href="http://www.streettails.org/">STAR (Street Tails Animal Rescue)</a> - Adoption center with Philadelphia’s first thrift store for pet supplies located in Northern Liberties.
              </li>
              <li>
                <a href="http://www.morrisanimalrefuge.org/">Morris Animal Refuge</a> - Shelter and adoption center located in Washington Square West.
              </li>
              <li>
                <a href="http://http//savedme.org/">Saved Me</a> – Adoption center located in Northern Liberties.
              </li>
            </ul>
            <h4>Miscellaneous</h4>
            <ul className="section-list">
              <li>
                <a href="http://www.petinsurancereview.com/">Pet Insurance Review</a> - Read reviews and compare companies
              </li>
              <li>
                <a href="http://www.dogfoodadvisor.com/">Dog Food Advisor</a> - Keep up-to-date with dog food recalls
              </li>
              <li>
                <a href="http://dogsinneedofspace.com/articles/">DINOS (Dogs In Need Of Space)</a> – Great blog created by a Philly dog walker
              </li>
            </ul>
            </div>
          </section>

          <section className='row' id="contact">
            <div className='col-sm-12'>
              <h1>Contact</h1>
              <div className='centered'>
              <i class="fas fa-mobile-alt"></i> Please text or call 267-746-0653 to schedule a Meet and Greet or discuss any questions you may have.
              </div>
              <div className='centered'>
                <i class="fas fa-envelope"></i> Or email <a href="mailto:info@gooddoggo.com">info@gooddoggo.com</a>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-sm-12'>

            </div>
          </section>
        </div>
      </main>
    )
  }
}
