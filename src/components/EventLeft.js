import React from 'react'
import '../styles/eventLeft.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'


const Event = (props) => {
  const data = props.data;
  return (
    <div className='left_event_body'>


      <div className='left_poster_container'>
        <img src={`https://res.cloudinary.com/dyusmsyij/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1677567933/images/events_poster/${data.poster_url}`} className="left_posters" />
      </div>

      <div className='left_event_content'>
        <div className='event_heading_component'>
          <h1 className='event_heading'>{data.name}</h1>
        </div>

        <p className='event_paragraph'>{data.description}</p>
        <div className='location_time'>
          <div className="event_location"><FontAwesomeIcon icon={faLocationDot} /> Location : {data.location}</div>
          <div className='event_time'><FontAwesomeIcon icon={faClock} /> Time : {data.time}</div>
        </div>
      </div>

    </div>
  )
}

export default Event   