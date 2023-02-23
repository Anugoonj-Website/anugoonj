import React from 'react';
import EventLeft from './EventLeft';
import EventRight from './EventRight'
import "../styles/events.css";


function Events(props) {
  return (

    <div className="events">
      <div>
        <h2 className='heading_events'>EVENTS & SCHEDULE</h2>
        <h6 className='sub_heading_event'>Day-{props.day} ({props.date} March 2023)</h6>
      </div>

      <div className='events_events'>
        <EventLeft />
        <EventRight />
        <EventLeft />
        <EventRight />
        <EventLeft />
        <EventRight />
        <EventLeft />
        <EventRight />
        <EventLeft />
        <EventRight />


      </div>

    </div>
  )
}

export default Events