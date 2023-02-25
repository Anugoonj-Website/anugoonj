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
  React.useEffect(() => {
    const startstop = document.getElementById("startstop");
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hours = document.getElementById("hours");
    const days = document.getElementById("days");

    const today = new Date();
    const todayAt12 = new Date();
    // todayAt12.setHours(0, 0, 0, 0);
    const birthdate = new Date("03/02/2023");
    console.log(today);
    console.log(birthdate);
    let totalSeconds = 0;
    if (todayAt12.getTime() === birthdate.getTime()) {
      totalSeconds = 0;
    } else {
      birthdate.setFullYear(today.getFullYear());
      totalSeconds = (birthdate - today) / 1000;
    }

    const setDisplay = (sec) => {
      days.innerText = String(Math.floor(sec / (24 * 60 * 60))).padStart(2, "0");
      sec = sec % (24 * 60 * 60);
      hours.innerText = String(Math.floor(sec / (60 * 60))).padStart(2, "0");
      sec = sec % (60 * 60);
      minutes.innerText = String(Math.floor(sec / 60)).padStart(2, "0");
      sec = sec % 60;
      seconds.innerText = String(Math.floor(sec)).padStart(2, "0");
    };

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 0;
        clearInterval(timer);
        return;
      }
      totalSeconds -= 1;
      setDisplay(totalSeconds);
    }, 1000);


  }, [])

  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="home">
            <div className="home_inside overflow-hidden relative">
              <div className="home_page_label flex flex-col items-center ml-32 w-[55%]">
                <h1 className="home_page_label_anugoonj mt-12">Anugoonj</h1>
                <p className="description text-white w-[80%] pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit, nihil natus doloribus nisi ipsum quas veritatis perspiciatis aspernatur provident.</p>
                {/* <button className="font-[poppins] font-medium third btn">Register Now</button> */}
                <div  className="container">
                  <div  className="clock text-white">
                    <div  className="days ">
                      <span id="days">00</span>
                      <p>DAYS</p>
                    </div>
                    <div  className="hours ">
                      <span id="hours">00</span>
                      <p>HOURS</p>
                    </div>
                    <div  className="minutes ">
                      <span id="minutes">00</span>
                      <p>MINS</p>
                    </div>
                    <div  className="seconds">
                      <span id="seconds">00</span>
                      <p>SECS</p>
                    </div>
                  </div>
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
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="teaser-sec h-[100vh] pt-32 pl-24 flex gap-20 items-center">
            <div className="frame rounded-3xl overflow-hidden w-max shadow-xl shadow-red-500">
              <iframe className=" h-[60vh] aspect-video" src="https://www.youtube.com/embed/iNPC_UH_3d4" title="YouTube video     player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="cont text-white w-[30vw]">
              <h1 className="font-[Norwester] text-justify">TEASER</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, cumque velit perspiciatis impedit, et incidunt amet a accusamus aspernatur molestiae facere esse minima, delectus ipsam suscipit soluta cupiditate porro magnam.</p>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={{ height: "100vh " }}>
          <div className="stars h-[100vh] pt-[20vh] flex flex-row-reverse">
            <div className="music-box h-[90vh] relative right-[-7vw]">
              <img src={require("../images/music-speaker.png")} className="h-[100%]" alt="" />
            </div>
            <div className="h-[100vh] mt-[-20vh] overflow-y-scroll artists">
              {starsArray.map((item) => (
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
