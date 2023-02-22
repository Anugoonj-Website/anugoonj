import React from 'react';
import Event from './EventLeft';
import EventRight from '../components/EventRight'
import "../styles/events.css";


function Events()
{
    return(
        
        <div className="events">
          <Event />
          <EventRight />
          <Event />
          <EventRight />
          <Event />
        </div>
    )
}

export default Events