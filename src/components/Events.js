import React from 'react';
import Event from '../components/Event';
import "../styles/events.css";


function Events()
{
    return(
        
        <div className="events">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
    )
}

export default Events