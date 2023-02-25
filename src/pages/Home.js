import React from "react";
import "../styles/home.css";
import arman_malik from "../images/am3.png";
import neon_circle from "../images/neon-circle.png";

const starsArray = [
  {
    Date: "03-03-2023",
    Name: "Guest Star Present",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image1.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "Guest Star Present",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image2.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "Guest Star Present",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image1.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "Guest Star Present",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image2.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  }
]



const Home = () => {
  return (<>
    <section style={{ height: "100vh ", overflowX: "hidden" }}>
      <div className="home overflow-x-hidden">
        <div className="home_inside overflow-hidden relative">
          <div className="home_page_label flex flex-col items-center ml-32 w-[55%]">
            <h1 className="home_page_label_anugoonj mt-12">Anugoonj</h1>
            <p className="description text-white w-[80%] pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit, nihil natus doloribus nisi ipsum quas veritatis perspiciatis aspernatur provident.</p>
            <div className="countdown-timer">
            </div>
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
    </section>
    <section className="teaser-sec" style={{ height: "max-content ", overflowX: "hidden" }}>
    <div className="line" />
      <h1 className="font-[Norwester] text-7xl text-center text-white gest-head py-2">Teaser</h1>
      <div className="line" />
      <div className=" h-[100vh] pt-32 pl-24 flex gap-20 items-center teaserr">
        <div className="frame rounded-3xl overflow-hidden w-max shadow-xl shadow-red-500">
          <iframe className=" h-[60vh] aspect-video" src="https://www.youtube.com/embed/iNPC_UH_3d4" title="YouTube video     player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="cont text-white w-[30vw]">
          <h1 className="font-[Norwester] text-justify">TEASER</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, cumque velit perspiciatis impedit, et incidunt amet a accusamus aspernatur molestiae facere esse minima, delectus ipsam suscipit soluta cupiditate porro magnam.</p>
        </div>
      </div>
    </section>
    <section className="stars" style={{ height: "max-content ", overflowX: "hidden",overflowY:"hidden" }}>
      <div className="line" />
      <h1 className="font-[Norwester] text-7xl text-center text-white gest-head py-2">Our Guest Stars</h1>
      <div className="line" />
      <div className="h-max items-center flex flex-row-reverse pt-10 pb-10 starsmain">
        <div className="music-box h-[90vh] relative right-[-7vw]">
          <img src={require("../images/music-speaker.png")} className="h-[100%]" alt="" />
        </div>
        <div className="h-max artists">
          {starsArray.map((item) => (
            <div className="flex flex-row items-start justify-center starsarray" key={item.image}>
              <div className="left mr-16">
                {/* <img src={require("../images/neon-ring.png")} className="neon-ring" alt="" /> */}
                <img src={require(`../images/${item.image}`)} className="artist_image" alt="" />
              </div>
              <div className="right w-[30vw] inside_starsarray">
                <div className="date"><h1 className="font-bold">{item.Date}</h1></div>
                <div className="name"><h1 className="font-bold">{item.Name}</h1></div>
                <div className="Desc"><p className="text-white">{item.Desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};



export default Home;
