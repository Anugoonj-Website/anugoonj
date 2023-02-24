import React from "react";
import "../styles/sponsors.css";
import EachSponsor from "../components/EachSponsor";
import data_of_sponsors from '../data/sponsors.json';
import SponsorFooter from "../components/SponsorFooter";

const Sponsor = () => {
  const sponsors_data = data_of_sponsors.sponsor_data;
  return (
    <div>
      <div className="sponsors_page">
        <div className="sponsor_heading_box">
          <h1 className="sponsor_heading ">PARTNERS</h1>
        </div>

        <div className="sponsors_content">
          <p className="sponsors_title_line">Thank You to Our Generous Sponsors for Making Our Mission Possible</p>
          <p className="sponsors_paragraph">We are grateful for the support of our sponsors, who share our vision and help us to create positive change in the world. Our sponsors are more than just financial backers; they are partners in our mission to make a difference in the lives of those we serve. Thanks to the generosity of our sponsors, we are able to fund important initiatives and programs that would not be possible otherwise. We value the relationships we have with our sponsors, and we strive to build meaningful connections that benefit both our organization and the businesses and individuals who support us. Without the support of our sponsors, we would not be able to reach as many people or make as big an impact in our community. We are deeply grateful for their contributions. Our sponsors play a vital role in helping us to achieve our goals, and we are honored to have them on board as we work to create a better world for all.</p>
        </div>



        {sponsors_data.map((element) => {
          return (
            <div className="sponsors_all">
              <div className="SponsorTitle">{element.title}</div>
              <div className="eachSponsorMain">
                {element.data.map((e) => {
                  return (

                    <EachSponsor names={e.names} image={e.image} />

                  )
                })}
              </div>

            </div>
          )

        })}


        <SponsorFooter />


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
      </div>
      

    </div>

  );
};

export default Sponsor;
