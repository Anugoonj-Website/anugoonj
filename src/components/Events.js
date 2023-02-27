import React, {useEffect } from "react";
import { useLocation } from 'react-router-dom';
import EventLeft from './EventLeft';
import EventRight from './EventRight'
import "../styles/events.css";
import { useMediaQuery } from '@react-hook/media-query';



function Events(props) {
  const data = props.data;
  const isMobile = useMediaQuery('only screen and (max-width: 600px)');

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (

    <div className="events">
      <div>
        <h2 className='heading_events'>EVENTS & SCHEDULE</h2>
        <h6 className='sub_heading_event'>Day-{props.day} ({props.date} March 2023)</h6>
      </div>

      <div className="sponsors_content">
          <p className="sponsors_title_line">Thank You to Our Generous Sponsors for Making Our Mission Possible</p>
          <p className="sponsors_paragraph">We are grateful for the support of our sponsors, who share our vision and help us to create positive change in the world. Our sponsors are more than just financial backers; they are partners in our mission to make a difference in the lives of those we serve.</p>
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