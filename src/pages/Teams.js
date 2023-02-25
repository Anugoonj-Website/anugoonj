import React from 'react'
import "../styles/teams.css";
import { NavLink, Outlet } from "react-router-dom";
import profile from '../components/Profile';


const Team = () => {
  return (
    <div className='teams'>
      <h2 className='heading_teams'>The Coordination Collective</h2>

      <div className='team_page_options'>
        <NavLink className="navbar_link nav_link_teams" to="/team/organising">Organising Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/web">Web Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/disipline">Discipline Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/hospitality">Hospitality Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/office">Office Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/mr_and_ms_anugoonj">Mr and Ms Anugoonj Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/ground">Ground Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/media">Media Team</NavLink>
      </div>

      <Outlet/>

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
        © 2023 Created By <b>Anugoonj</b> All Rights Reserved.
      </p>
      </div>

    </div>
  )
}

export default Team;