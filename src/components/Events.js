import React from 'react';
import EventLeft from './EventLeft';
import EventRight from './EventRight'
import "../styles/events.css";


function Events()
{
    return(
        
        <div className="events">
          <EventLeft />
          <EventRight />
          <EventLeft />
          <EventRight />
          <EventLeft />
        </div>
    )
}

export default Events