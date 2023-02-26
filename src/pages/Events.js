import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import "../styles/events.css";

const Events = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className='events_page'>

      <div className='event_page_options'>
        <NavLink className="navbar_link nav_link_events" to="/events/day_1"> 
        <div className='nav_link_day'>Day-1</div>
        <div className='nav_link_date'>2nd March</div>
        </NavLink>
        <NavLink className="navbar_link" to="/events/day_2"> 
        <div className='nav_link_day'>Day-2</div>
        <div className='nav_link_date'>3rd March</div></NavLink>
        <NavLink className="navbar_link" to="/events/day_3"> 
        <div className='nav_link_day'>Day-3</div>
        <div className='nav_link_date'>4th March</div></NavLink>
      </div>

      <Outlet />
 
      <div class="animation-area">
        <ul class="box-area">
          <li ></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          
        </ul>
      </div>

      <div className="event_footer">
      <p class="sponsor_rights_text">
        © 2023 Organised and Managed by <b>Directorate of Student's Welfare.</b> All Rights Reserved.
      </p>
      </div>

    </div>

  )
}

export default Events;