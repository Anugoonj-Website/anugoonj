import React from "react";
import "../styles/home.css";
import arman_malik from "../images/am3.png";
// import neon_circle from "../images/neon-circle.png";
import arrow from "../images/arrow.gif";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const Home = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="home">
            <div className="home_inside overflow-hidden relative">
              <div className="home_page_label flex flex-col items-center ml-32 w-[55%]">
                <h1 className="home_page_label_anugoonj mt-12">Anugoonj</h1>
                <p className="description text-white w-[80%] pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit, nihil natus doloribus nisi ipsum quas veritatis perspiciatis aspernatur provident.</p>
                <button className="font-[poppins] font-medium third btn">Register Now</button>
              </div>
              <img
                src={neon_circle}
                alt="img"
                className="neon-circle z-[1]"
              />
              <img
                src={arman_malik}
                alt="img"
                className="home_arman_malik_image"
              />

              <div className="home_arrow">
                <img src={arrow} alt="arrow" className="home_down_arrow" />
              </div> */}
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <h1>Guest Performance</h1>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <h1>Page2</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default Home;
