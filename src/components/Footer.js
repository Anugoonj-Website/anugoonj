import React from "react";
import "../styles/footer.css";
import icon from "../images/anugoonj_logo.png";
import ipu_icon from "../images/ipu_logo.png";
import year25_icon from "../images/25year_logobg.png";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="left-col">
          <div class="footer-icons">
          
          <a href="https://anugoonj.org" target="_blank" rel="noopener noreferrer"><img src={icon} alt="" className="logo_footer" /></a>

          <a href="http://www.ipu.ac.in" target="_blank" rel="noopener noreferrer"><img src={ipu_icon} alt="" className="logo_footer" /></a>
          <a href="http://www.ipu.ac.in" target="_blank" rel="noopener noreferrer"><img src={year25_icon} alt="" className="logo_footer" /></a>
            
            
          </div>
          <div class="social-media">
            <div className="icon_div">
              <a href="tel:9990028708">
                <i class="fa fa-phone social_icon"></i>
              </a>
              <p className="follower">+91 9990028708</p>
            </div>
            <div className="icon_div">
              <a href="https://www.facebook.com/anugoonj2k1x?mibextid=ZbWKwL">
                <i class="fab fa-facebook social_icon"></i>
              </a>
              <p className="follower">9700+ followers</p>
            </div>
            <div className="icon_div">
              <a href="https://www.instagram.com/anugoonj_official/">
                <i class="fab fa-instagram"></i>
              </a>
              <p className="follower">6000+ followers</p>
            </div>
            <div className="icon_div">
              <a href="mailto:dsw@ipu.ac.in">
                <i class="fa-regular fa-envelope social_icon"></i>
              </a>
              <p className="follower">dsw@ipu.ac.in</p>
            </div>
            <div className="icon_div">
              <a href="mailto:anugoonj@ipu.ac.in">
                <i class="fa-regular fa-envelope social_icon"></i>
              </a>
              <p className="follower">anugoonj@ipu.ac.in</p>
            </div>
          </div>
        </div>

        <div class="right-col">
          <h1>Contact Us</h1>
          <div class="border"></div>
          <div className="right-col-primary">
            <div className="contact-details">
              <p>Aryan Kishore Singh</p>
              <p>President</p>
              <p>9990028708</p>
            </div>
            
          </div>
        </div>
      </div>
      <p class="rights-text">
        © 2023 Organised and Managed by <b>Directorate of Student's Welfare.</b> All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
