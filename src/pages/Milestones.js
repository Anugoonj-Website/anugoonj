import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/milestones.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Cardcarousel from "../components/Cardcarousel";
// 2020
import img12020 from "../images/c2020/_MG_1111_1_11zon.jpg";
import img22020 from "../images/c2020/_MG_1197_2_11zon.jpg";
import img32020 from "../images/c2020/_MG_1409_3_11zon.jpg";
import img42020 from "../images/c2020/_MG_1466_4_11zon.jpg";
import img52020 from "../images/c2020/_MG_1845_5_11zon.jpg";
import img62020 from "../images/c2020/20200217_101222_6_11zon.jpg";
import img72020 from "../images/c2020/86489767_3490920520979136_2476187330637987840_n_7_11zon.jpg";
import img82020 from "../images/c2020/86498622_3494321073972414_7414324231162298368_n_8_11zon.jpg";
import img92020 from "../images/c2020/86639113_3494318957305959_3751072467498565632_n_9_11zon.jpg";
import img102020 from "../images/c2020/86661856_3491145060956682_1456516606568955904_n_10_11zon.jpg";
import img112020 from "../images/c2020/86766473_3490779557659899_5678329507027615744_n_11_11zon.jpg";
import img122020 from "../images/c2020/86842002_3491243430946845_8290212962128363520_n_12_11zon.jpg";
import img132020 from "../images/c2020/87059690_3493870997350755_7995725943907811328_n_14_11zon.jpg";
import img142020 from "../images/c2020/87067470_3490912767646578_1300547862806921216_n_15_11zon.jpg";
import img152020 from "../images/c2020/89699376_3573198139418040_8010630923533942784_n_16_11zon.jpg";
// 2019
import img12019 from "../images/c2019/51444095_2076244049136613_3626754368532905984_n.jpg";
import img22019 from "../images/c2019/DSC_5804.JPG";
import img32019 from "../images/c2019/51810412_2293040367594835_5176527350891806720_n.jpg";
import img42019 from "../images/c2019/52401208_643448269411019_9025455494268977152_n.jpg";
import img52019 from "../images/c2019/Tecnia-photo7.webp";
import img62019 from "../images/c2019/52828033_2505485696189295_9077561470568366080_n.jpg";
import img72019 from "../images/c2019/52914033_2505545782849953_4333366476879691776_n.jpg";
import img82019 from "../images/c2019/54258070_2296990417028053_7501122861629702144_n.jpg";
import img92019 from "../images/c2019/download (1).jpg";
import img102019 from "../images/c2019/download (2).jpg";
import img112019 from "../images/c2019/download.jpg";
import img122019 from "../images/c2019/DSC_5387.JPG";
import img132019 from "../images/c2019/DSC_5513.JPG";
import img142019 from "../images/c2019/DSC_5630.JPG";
import img152019 from "../images/c2019/DSC_5772.JPG";
// 2018
import img12018 from "../images/c2018/DSC_0222_1_11zon.jpg";
import img22018 from "../images/c2018/DSC_0332_2_11zon.jpg";
import img32018 from "../images/c2018/DSC_0522_3_11zon.jpg";
import img42018 from "../images/c2018/DSC_0671_4_11zon.jpg";
import img52018 from "../images/c2018/DSC_3582_5_11zon.jpg";
import img62018 from "../images/c2018/DSC_3624_6_11zon.jpg";
import img72018 from "../images/c2018/DSC_3697_7_11zon.jpg";
import img82018 from "../images/c2018/DSC_3750_8_11zon.jpg";
import img92018 from "../images/c2018/DSC_3894_9_11zon.jpg";
import img102018 from "../images/c2018/DSC_4022_10_11zon.jpg";
import img112018 from "../images/c2018/DSC_4031_11_11zon.jpg";
import img122018 from "../images/c2018/DSC_4157_12_11zon.jpg";
import img132018 from "../images/c2018/DSC_4236_13_11zon.jpg";
import img142018 from "../images/c2018/DSC_4314_14_11zon.jpg";
import img152018 from "../images/c2018/DSC_4342_15_11zon.jpg";

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
          <div class="year-header">
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
                  <img loading="lazy" src={img12020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img22020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img32020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img42020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img52020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img62020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img72020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img82020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img92020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img102020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img112020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img122020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img132020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img142020} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img152020} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="year-header">
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
                  <img loading="lazy" src={img72019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img22019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img152019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img42019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img52019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img62019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img12019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img82019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img92019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img102019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img112019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img122019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img32019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img142019} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img132019} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="year-header">
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
                  <img loading="lazy" src={img72018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img22018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img152018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img42018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img52018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img62018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img12018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img82018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img92018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img102018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img112018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img122018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img32018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img142018} alt="" />
                </div>
                <div>
                  <img loading="lazy" src={img132018} alt="" />
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

      <div className="event_footer">
        <p class="sponsor_rights_text">
          © 2023 Created By <b>Anugoonj</b> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Milestones;
