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
        <NavLink className="navbar_link" to="/events/day_1"> Day-1</NavLink>
        <NavLink className="navbar_link" to="/events/day_2">Day-2</NavLink>
        <NavLink className="navbar_link" to="/events/day_3">Day-3</NavLink>
      </div>

      <Outlet />
 
      <div class="animation-area">
        <ul class="box-area">
          <li></li>
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

    </div>

  )
}

export default Events;