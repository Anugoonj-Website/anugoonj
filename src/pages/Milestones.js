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
    <div className="milestones">
      <div className="milestones_inside">
        <spam>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="milestones_page_label_anugoonj">MILESTONES</h1>
        </spam>

        <br></br>
        <br></br>
        <br></br>

        <div class="row">
          <div class="column">
            <div class="button">
              <button type="submit" class="2020-btn">
                2020
              </button>
            </div>
          </div>
          <div class="column">
            <div class="button">
              <button type="submit" class="2019-btn">
                2019
              </button>
            </div>
          </div>
          <div class="column">
            <div class="button">
              <button type="submit" class="2018-btn">
                2018
              </button>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Milestones;
