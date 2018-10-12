import React from 'react';

import './about.css';
import doggo from './doggo2.jpg';

export default (props) => {
  return (
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

        <div className='col-sm-12'>

          <p>A little bit about me (Stacey): Born and raised in Philadelphia, I have always had an affinity for animals, especially dogs. In high school, I majored in Small Animal Technology at W.B. Saul. I then earned my bachelor’s degree in Psychology from Millersville University, where much of my coursework related to animals and animal behavior. My work experience includes being a grooming salon assistant, dog walker, animal care technician, dog trainer, shelter volunteer coordinator, and veterinary receptionist.</p>

          <p>Regarding training, I taught classes at PetSmart, worked with What A Good Dog, and taught Teacher’s Pet classes (designed by Carol Siegrist) as the Volunteer Coordinator for the PSPCA. Most recently, I ran the puppy social club at Center City Veterinary Hospital.</p>

          <p>I  also enjoy photography so clients can expect to receive photos of their pets. Photos will never be shared publicly without prior permission from the owner.</p>
        </div>

      </section>
    </div>
  )
}
