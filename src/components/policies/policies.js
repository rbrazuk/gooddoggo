import React from 'react';

import './policies.css';

export default (props) => {
  return (
    <div className='container-flex'>
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
    </div>

  )
}
