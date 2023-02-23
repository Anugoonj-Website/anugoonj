import React from 'react'
import '../styles/eventRight.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import poster from "../images/poster.jpg";


const Event = (props) => {
  return (
    <div className='right_event_body'>

      <div className='right_event_content '>
        <div className='event_heading_component'>
          <h1 className='event_heading'>Event1</h1>
        </div>
        <p className='event_paragraph'>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, expedita! consectetur adipisicing elit.</p>
        <div className='location_time'>
          <div><FontAwesomeIcon icon={faLocationDot} /> Location : D-Block</div>
          <div className='event_time'><FontAwesomeIcon icon={faClock} /> Time : 2:30 Pm</div>
        </div>
      </div>

      <div className='right_poster_container'>
        <img src={poster} className="right_posters" />
      </div>

    </div>
  )
}

export default Event   