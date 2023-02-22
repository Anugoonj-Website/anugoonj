import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import Loader from '../components/Loader';
import SmallEventLeft from '../components/SmallEventLeft'
import SmallEventRight from '../components/SmallEventRight';

const Event = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className='events_page'>
        {loading && <Loader heading="EVENTS" />}
        <div className='event_page_options'>
          <NavLink className="navbar_link" to="/"> Day-1</NavLink>
          <NavLink className="navbar_link" to="/events">Day-2</NavLink>
          <NavLink className="navbar_link" to="/sponsors">Day-3</NavLink>
        </div>

        <div className="events">
          <SmallEventLeft />
          <SmallEventRight />
        </div>


      <div class="animation-area">
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>



      </div>

  )
}

export default Event