import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/milestones.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Cardcarousel from "../components/Cardcarousel";

const Milestones = () => {
  // function carousel() {}
  // let box = document.querySelector(".carousel-card");
  // function btnprev() {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft - width;
  // }
  // function btnnext() {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  // }
  return (
    <div className="sponsors_page">
      <div className="sponsor_heading_box">
        <spam>
          <h1 className="milestones_page_label_anugoonj">MILESTONES</h1>
        </spam>
      </div>
      <div className="sponsors_content">
        <p className="sponsors_title_line">
          Thank You to Our Generous Sponsors for Making Our Mission Possible
        </p>
        <p className="sponsors_paragraph">
          We are grateful for the support of our sponsors, who share our vision
          and help us to create positive change in the world. Our sponsors are
          more than just financial backers; they are partners in our mission to
          make a difference in the lives of those we serve.
        </p>
        <br></br>

        <div class="row">
          <div class="column-left">
            <div class="button">
              <button type="submit" className="2020-btn">
                2020
              </button>
            </div>
          </div>
          <div class="column-right">
            <div className="carousel_size">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
              >
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/gi1"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/6ff"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/7ma"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column-left">
            <div class="button">
              <button type="submit" className="2020-btn">
                2019
              </button>
            </div>
          </div>
          <div class="column-right">
            <div className="carousel_size">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
              >
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/gi1"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/6ff"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/7ma"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column-left">
            <div class="button">
              <button type="submit" className="2020-btn">
                2018
              </button>
            </div>
          </div>
          <div class="column-right">
            <div className="carousel_size">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
              >
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/gi1"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/6ff"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="https://links.papareact.com/7ma"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
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
  );
};

export default Milestones;
