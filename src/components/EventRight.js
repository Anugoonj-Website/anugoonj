import React from 'react'
import '../styles/eventRight.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'


const Event = (props) => {
  const data = props.data;

  return (
    <div className='right_event_body'>

      <div className='right_event_content '>
        <div className='event_heading_component'>
          <h1 className='event_heading'>{data.name}</h1>
        </div>
        <p className='event_paragraph'>{data.description}</p>
        <div className='location_time'>
          <div className="event_location"><FontAwesomeIcon icon={faLocationDot} /> Location : {data.location}</div>
          <div className='event_time'><FontAwesomeIcon icon={faClock} /> Time : {data.time}</div>
        </div>
      </div>

      <div className='right_poster_container'>
        <img src={require(`../images/events_poster/${data.poster_url}`)}  className="right_posters" />
      </div>

    </div>
  )
}

export default Event   