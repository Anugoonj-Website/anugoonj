import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/milestones.css";

const Milestones = () => {
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

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="/src/images/_MG_1409.JPG"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/src/images/_MG_1409.JPG"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/src/images/_MG_1409.JPG"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
