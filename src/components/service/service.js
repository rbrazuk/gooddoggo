import React from 'react';

import './service.css';

export default (props) => {

  return(
    <div className='service'>
      <div className='service-name'>{props.name}</div>
      <ul className='service-list'>
        <li>${props.cost1to4} - 1 to 4 times per week</li>
        { props.cost5 ? <li>${props.cost5} - 5 times per week</li> : null}
      </ul>

      <div className='service-note'>{props.note}</div>
    </div>
  )

}
