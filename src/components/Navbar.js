import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/anugoonj_logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="img" className="logo_img" />

        <div className="navbar_route">
          <NavLink className="navbar_link" to="/">  
            Home
          </NavLink>
          <NavLink className="navbar_link" to="/events">
            Events
          </NavLink>
          <NavLink className="navbar_link" to="/sponsors">
            Sponsors
          </NavLink>
          <NavLink className="navbar_link" to="/legacy">
            Legacy
          </NavLink>
          <NavLink className="navbar_link" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
