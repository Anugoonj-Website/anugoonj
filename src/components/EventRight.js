import React from 'react'
import '../styles/eventRight.css'
import '../styles/circle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import poster from "../images/poster.jpg";


const Event = (props) => {
  return (
    <div className='left_event_body'>

      <div className='event_content event_conent_bondary'>
        <h1 className='event_heading'>Event1</h1>
        <p className='event_paragraph'>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, expedita! consectetur adipisicing elit. Voluptate dolores epturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores epturi</p>
        <div className='location_time'>
          <div><FontAwesomeIcon icon={faLocationDot} /> Location : D-Block</div>
          <div className='event_time'><FontAwesomeIcon icon={faClock} /> Time : 2:30 Pm</div>
        </div>
      </div>

      <img src={poster} className="Posters_right" />

    </div>
  )
}

export default Event   