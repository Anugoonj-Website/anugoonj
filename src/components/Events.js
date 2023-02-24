import React from 'react';
import EventLeft from './EventLeft';
import EventRight from './EventRight'
import "../styles/events.css";
import { useMediaQuery } from '@react-hook/media-query';



function Events(props) {
  const data = props.data;
  const isMobile = useMediaQuery('only screen and (max-width: 600px)');
  

  return (

    <div className="events">
      <div>
        <h2 className='heading_events'>EVENTS & SCHEDULE</h2>
        <h6 className='sub_heading_event'>Day-{props.day} ({props.date} March 2023)</h6>
      </div>

      <div className='events_events'>
        {isMobile && data.map((item) => {
          return <EventLeft data={item} />;
        })}


        {!isMobile && data.map((item, index) => {
          if (index % 2 == 0) { return <EventLeft data={item} />; }

          else { return <EventRight data={item} /> }

        })}
      </div>

    </div>
  )
}

export default Events