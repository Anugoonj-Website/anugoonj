import React from "react";
import "../styles/home.css";
import arman_malik from "../images/am3.png";
import neon_circle from "../images/neon-circle.png";
// import arrow from "../images/arrow.png";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const starsArray = [
  {
  Date: "03-03-2023",
  Name: "Guest Star Present",
  Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
  image:"artist_image1.png",
  SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
  Date: "03-03-2023",
  Name: "Guest Star Present",
  Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
  image:"artist_image2.png",
  SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
  Date: "03-03-2023",
  Name: "Guest Star Present",
  Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
  image:"artist_image1.png",
  SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "Guest Star Present",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image:"artist_image2.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  }
]



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

              {/* <div className="home_arrow">
                <img src={arrow} alt="arrow" className="home_down_arrow" />
              </div>  */}
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <h1>Guest Performance</h1>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="stars h-[100vh] pt-[20vh] flex flex-row-reverse">
            <div className="music-box h-[90vh] relative right-[-7vw]">
              <img src={require("../images/music-speaker.png")} className="h-[100%]" alt="" />
            </div>
            <div className="h-[100vh] mt-[-20vh] overflow-auto">
              { starsArray.map((item) => (
                <div className="flex flex-row translate-y-[20vh] items-start justify-center" key={item.image}>
                <div className="left mr-16">
                  {/* <img src={require("../images/neon-ring.png")} className="neon-ring" alt="" /> */}
                  <img src={require(`../images/${item.image}`)} className="artist_image" alt="" />
                </div>
                <div className="right w-[30vw]">
                  <div className="date"><h1 className=" font-bold">{item.Date}</h1></div>
                  <div className="name"><h1 className=" font-bold">{item.Name}</h1></div>
                  <div className="Desc"><p className="text-white">{item.Desc}</p></div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};



export default Home;
