import React from 'react'
import "../styles/teams.css";
import { NavLink, Outlet } from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';



const Team = () => {

  const isTablet = useMediaQuery('only screen and (max-width: 1050px)');
  const isPhone = useMediaQuery('only screen and (max-width: 450px)');


  return (
    <div className='teams'>
      <h2 className='font-[Norwester] heading_teams'>The Coordination Collective</h2>

      {!isTablet && <div className='team_page_options'>
        <NavLink className="navbar_link nav_link_teams" to="/team/organising">Organising Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/web">Web Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/disipline">Discipline Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/hospitality">Hospitality Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/office">Office Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/mr_and_ms_anugoonj">Mr and Ms Anugoonj Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/ground">Ground Team</NavLink>
        <NavLink className="navbar_link nav_link_teams" to="/team/media">Media Team</NavLink>
      </div>}
      {isTablet && !isPhone && <>
        <div className='team_page_options'>
          <NavLink className="navbar_link nav_link_teams" to="/team/organising">Organising Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/web">Web Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/disipline">Discipline Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/hospitality">Hospitality Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/office">Office Team</NavLink>

        </div>
        <div className='team_page_options'>
          <NavLink className="navbar_link nav_link_teams" to="/team/mr_and_ms_anugoonj">Mr and Ms Anugoonj Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/ground">Ground Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/media">Media Team</NavLink>
        </div>
      </>}


      {isPhone && <>
        <div className='team_page_options'>
          <NavLink className="navbar_link nav_link_teams" to="/team/organising">Organising Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/web">Web Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/disipline">Discipline Team</NavLink>


        </div>
        <div className='team_page_options'>
          <NavLink className="navbar_link nav_link_teams" to="/team/office">Office Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/mr_and_ms_anugoonj">Mr and Ms Anugoonj Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/ground">Ground Team</NavLink>

        </div>
        <div className='team_page_options'>
          <NavLink className="navbar_link nav_link_teams" to="/team/hospitality">Hospitality Team</NavLink>
          <NavLink className="navbar_link nav_link_teams" to="/team/media">Media Team</NavLink>
        </div>
      </>}
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
          © 2023 Created By <b>Anugoonj</b> All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Team;