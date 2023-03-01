import React, {useEffect } from "react";
import { useLocation } from 'react-router-dom';
import EventLeft from './EventLeft';
import EventRight from './EventRight';
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
        <h2 className='font-[Norwester] heading_events'>EVENTS & SCHEDULE</h2>
        <h6 className='sub_heading_event'>Day-{props.day} ({props.date} March 2023)</h6>
      </div>

      <div className="sponsors_content">
          <p className="sponsors_title_line">Join us for a spectacular showcase of talent and entertainment - Experience the excitement with our diverse range of events!</p>
          <p className="sponsors_paragraph">Experience 3 days of non-stop entertainment with over 40 events including music, dance, theater, and much more. Witness the best talent from across the country competing for the top honors in various categories. Enjoy the soulful melodies of Armaan Malik, the electrifying beats of DJ Session, and the foot-tapping rhythms of Sukh-E in a night dedicated to Punjabi music. With something for everyone, this event promises to be a feast for the senses. Don't miss out on this extravaganza!</p>
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