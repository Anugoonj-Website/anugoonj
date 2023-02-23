import React from "react";
import "../styles/footer.css";
import icon from "../images/anugoonj_logo.png";
function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="left-col">
          <img src={icon} alt="" className="logo_footer" />
          <div class="social-media">
            <div className="icon_div">
              <a href="#">
                <i class="fab fa-facebook-f social_icon"></i>
              </a>
              <p className="follower">1000+ followers</p>
            </div>
            <div className="icon_div">
              <a href="#">
                <i class="fab fa-twitter social_icon"></i>
              </a>
              <p className="follower">1000+ followers</p>
            </div>
            <div className="icon_div">
              <a href="https://instagram.com/anugoonj_official?igshid=MjkzY2Y1YTY=">
                <i class="fab fa-instagram"></i>
              </a>
              <p className="follower">1000+ followers</p>
            </div>
            <div className="icon_div">
              <a href="#">
                <i class="fab fa-youtube social_icon"></i>
              </a>
              <p className="follower">1000+ followers</p>
            </div>
            <div className="icon_div">
              <a href="#">
                <i class="fab fa-linkedin-in social_icon"></i>
              </a>
              <p className="follower">1000+ followers</p>
            </div>
          </div>
        </div>

        <div class="right-col">
          <h1>Contact Us</h1>
          <div class="border"></div>
          <div className="right-col-primary">
            <div className="contact-details">
              <p>Aryavir Malik</p>
              <p>DSW president</p>
              <p>09928827228</p>
            </div>
            <div className="contact-details">
              <p>Aryavir Malik</p>
              <p>DSW president</p>
              <p>09928827228</p>
            </div>
            <div className="contact-details">
              <p>Aryavir Malik</p>
              <p>DSW president</p>
              <p>09928827228</p>
            </div>
          </div>
        </div>
      </div>
      <p class="rights-text">
        © 2023 Created By <b>Anugoonj</b> All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
