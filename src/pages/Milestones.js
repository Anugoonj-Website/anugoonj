import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/milestones.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink, Outlet } from "react-router-dom";


const Milestones = () => {
 
  return (
    <div className="sponsors_page" style={{ paddingBottom: "0" }}>
      <div className="sponsor_heading_box">
        <spam>
          <h1 className="milestones_page_label_anugoonj">MILESTONES</h1>
        </spam>
      </div>
      <div className="sponsors_content">

        <br></br>
        <div className="milstone_button">
          <NavLink className="navbar_link navbar_link_milestone" to="/milestones/2020">2020</NavLink>
          <NavLink className="navbar_link navbar_link_milestone" to="/milestones/2019">2019</NavLink>
          <NavLink className="navbar_link navbar_link_milestone" to="/milestones/2018">2018</NavLink>
        </div>

        <Outlet />


      </div>



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

      <div className="event_footer">
        <p class="sponsor_rights_text">
          © 2023 Created By <b>Anugoonj</b> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Milestones;
