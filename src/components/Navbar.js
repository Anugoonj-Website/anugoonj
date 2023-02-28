import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from "../images/anugoonj_logo.png";
import "../styles/navbar.css";
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const isMobile = useMediaQuery('only screen and (max-width: 820px)');
  const [navbars, SetNavbars] = useState(true);

  const location = useLocation();

  useEffect(() => {
    SetNavbars(true);
  }, [location]);


  return (
    <>
      <div className="navbar">
        <NavLink to="/"><img src={logo} alt="img" className="logo_img" /></NavLink>

        {!(navbars && isMobile) && <div className="navbar_route">
          {isMobile && <FontAwesomeIcon className="cross_icon" icon={faTimes} onClick={() => { SetNavbars(!navbars) }} />}
          <NavLink className="navbar_link " to="/">
            Home
          </NavLink>
          <NavLink className="navbar_link " to="/events">
            Events
          </NavLink>
          <NavLink className="navbar_link " to="/milestones">
            Milestones
          </NavLink>
          <NavLink className="navbar_link " to="/team">
            Team
          </NavLink>
          <NavLink className="navbar_link " to="/sponsors">
            Sponsors
          </NavLink>
        </div>}

        {(navbars && isMobile) && <FontAwesomeIcon className="navbar_bars" onClick={() => { SetNavbars(!navbars) }} icon={faBars} />}

      </div>
    </>
  );
};

export default Navbar;
