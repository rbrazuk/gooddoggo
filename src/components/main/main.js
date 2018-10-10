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

          <section className="row" id="about">
            <h1 className='col-sm-12'>About</h1>
            <div className='col-sm-5'>
              <img className='about-pic' src={doggo} />
            </div>
            <div className='col-sm-7'>

              <p>Hello and welcome to Good Dog Go, LLC. My name is Stacey Plattenberger. I started Good Dog Go to provide a comprehensive and enriching dog walking experience for your beloved canine companions. Dogs are always learning whether or not we are actively teaching them. As a pet professional, part of my job is to make sure the right behaviors are being reinforced. Manners-minded dog walking means skills such as providing eye contact, waiting at doorways and corners, walking on a loose leash, and sitting (instead of jumping) will be positively reinforced through each and every interaction I have with your dog.</p>
              <p>Services with Good Dog Go are meant to compliment training guided by a professional dog trainer, not to replace it. See the <a href="#resources">Resources</a> section for referrals. </p>
              <p>Good Dog Go provides services for the Washington Square neighborhood of Philadelphia.</p>
              <p>I am insured and bonded through the Business Insurers of the Carolinas via my membership with Pet Sitters International (PSI). Additionally, I have been Pet First Aid Certified through the American Red Cross.</p>
            </div>
          </section>

          <section className="row" id="services">
            <div className='col-sm-12'>
              <h1>Rates & Services</h1>
            </div>
            <div className='col-sm-3'>
              <Service
                name="10-Minute Visit"
                cost1to4="10"
                note="Cats/small animals and clients along the perimeter of Washington Square Park only"  />
            </div>
            <div className='col-sm-3'>
              <Service
                name="20-Minute Visit"
                cost1to4="14"
                cost5="15" />
            </div>
            <div className='col-sm-3'>
              <Service
                name="30-Minute Visit"
                cost1to4="17"
                cost5="16" />
            </div>
            <div className='col-sm-3'>
              <Service
                name="60-Minute Visit"
                cost1to4="30"
                cost5="28" />
            </div>
            <div className='col-sm-3'>
              <div className='service'>
                <div className='service-name'>Overnight (8PM to 8AM)</div>
                <ul className='service-list'>
                  <li>$60 - Mon through Thurs</li>
                  <li>$65 - Friday through Sunday</li>
                </ul>
                <div className='service-note'>
                  Includes feeding, one walk in the evening, one walk in the morning, and lots of cuddles and mental stimulation
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='service'>
                <div className='service-name'>Additional Pets</div>
                <ul className='service-list'>
                <li>$3 per dog or up to 3 cats/small animals</li>
                <li>Owners with two large dogs are encouraged to split a longer visit.</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='service'>
                <div className='service-name'>Medication</div>
                <ul className='service-list'>
                  <li>$3 - unless given in food</li>
                </ul>
              </div>
            </div>
          </section>


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

          <section className='row'>
            <div className='col-sm-12'>
              <h1>Policies</h1>
            </div>
            <div className='col-sm-6'>
              <ul className='section-list'>
                <li>All dogs are walks individually unless they live in the same household. This enables me to focus on engaging your dog, rewarding good manners, and developing a bond. It also makes it much easier for me to prevent or deal with any difficult or emergency situations that may occur.</li>
                <li><span className='highlighted'>Equipment used during walks:</span> Fabric or leather 4-6 foot leash*, Martingale collar, flat collar, head harness, and body harness. I will gladly use my own if you use some other type of equipment.</li>
                <li><span className='highlighted'>Payment:</span> Good Dog Dog only accepts cash or check (payable to Good Dog Go). Payment is due when services are rendered. In the event of additional unforeseen visits or other costs (such as food, supplies, or vet fees), payment is expected within 30 days of the completion of services or at the time of next service, whichever comes first. A late fee of $20.00 will be applied for all missed payments. A $30.00 fee will be charged for returned checks.</li>
                <li><span className='highlighted'>Cancellations:</span> No refunds will be given for cancelled visits once time has been reserved. A minimum of 24 hours notice for regular walks or 48 hours notice for overnights is required to receive credit toward future visits.</li>
              </ul>
            </div>
            <div className='col-sm-6'>
              <ul className='section-list'>
                <li><span className='highlighted'>Visits for Non-Regular Clients:</span>  I require at least one preliminary test walk prior to the owner’s departure if I am unfamiliar with the dog. This allows me the opportunity to gauge your dog’s comfort level, prior to you going on your trip. If you know that your pet is nervous or weary of strangers, several visits may be required before you leave for your vacation. Please be sure to schedule services as far in advance as possible to allow ample time for the initial meeting, the preliminary walk(s) and arrangements for alternate care. For the well-being of your pet and myself, I will not attempt to leash a dog that will not willingly approach me for treats or toys (except in emergency situations). I will respect your dog’s body language and go at his/her own pace. Preliminary visits are not a guarantee of service.</li>
                <li><span className='highlighted'>Overnight Services:</span> Due to allergies, I cannot provide overnight services in a smoking environment.</li>
                <li><span className='highlighted'>Dog Parks:</span> Once a bond with your dog has been developed and I am confident in your dog’s ability to respond to me, I may take a single sociable dog to the dog park at the owner’s request or with owner permission. All specific and common-sense rules will be followed with no exceptions.</li>
              </ul>
            </div>
            <div className='col-sm-12 centered policies-bottom'>
              <p>Additional policies are outlined in the Service Agreement.</p>
              <p className='italic'>* Articles on the dangers of Retractible Leashes: Consumer Reports, ABC News, PetMD, Dogster.</p>
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
