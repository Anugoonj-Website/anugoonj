import React, { useState } from "react";
import "../styles/home.css";
import arman_malik from "../images/am3.png";
import neon_circle from "../images/neon-circle.png";
import Footer from "../components/Footer";

const starsArray = [
  {
    Date: "02-03-2023",
    Name: "SUKHI (PUNJABI NIGHT)",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image1.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "NIZAMI BROTHERS (AN EVENING WITH SUFISM)",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image2.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "03-03-2023",
    Name: "EDM NIGHHT (RAVATOR)",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image3.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  },
  {
    Date: "04-03-2023",
    Name: "ARMAAN MALIK",
    Desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus, eveniet veniam nemo cumque esse dignissimos aliquam assumenda inventore dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolores. Optio, ipsam? Est, optio quis magnam autem voluptates fugiat! At.",
    image: "artist_image4.png",
    SubStars: ["Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan", "Mohit Chauhan"]
  }
]



const Home = () => {

  const[live , SetLive] = useState(false);
  React.useEffect(() => {
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hours = document.getElementById("hours");
    const days = document.getElementById("days");

    const today = new Date();
    const todayAt12 = new Date();
    const birthdate = new Date("Mar 02 2023 10:00:00 GMT+0530");
    if(birthdate<=today)
    {
      SetLive(true);
    }
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
  return (<div className="home_page_all">
    <section className="hero" style={{ height: "max-content ", overflowX: "hidden" }}>
      <div className="home overflow-x-hidden">
        <div className="home_inside overflow-hidden relative flex flex-row justify-center items-center">
          <div className="home_page_label flex flex-col items-center justify-center w-[75%] h-auto">
            <h1 className="home_page_label_anugoonj">Anugoonj'23</h1>
            <p className="description text-white w-[80%] pt-5">Discover the Magic of India's Rich Culture - Anugoonj, the Annual Festival that Showcases Art, Music, Dance, Literature, and Sports, All in One Place!</p>
            {!live && <div className="countdown-timer">
            <div  className="containerrr">
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
            </div>}
            {live && <div className="countdown-timer">
              <div className="Live_now">
              Live now!!
              </div>
            </div>}
          </div>
          <div className="">
            <div className="images flex flex-col items-center justify-center">
              {/* <img
                src={neon_circle}
                alt="img"
                className="neon-circle z-[1] h-[90%] absolute bottom-[-10vh] right-[-10vw]"
                /> */}
              <img
                src={arman_malik}
                alt="img"
                className="home_arman_malik_image block relative z-[5] w-[65%] bottom-[-20vh] right-[-8vw]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="teaser-sec" style={{ height: "max-content ", overflowX: "hidden" }}>
      <div className=" h-[100vh] pt-32 pl-24 flex gap-20 items-center teaserr">
        <div className="frame rounded-3xl overflow-hidden aspect-video w-max shadow-xl teaser_vidio">
          <iframe className=" h-[60vh] aspect-video" src="https://www.youtube.com/embed/iNPC_UH_3d4" title="YouTube video     player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="cont text-white w-[30vw]">
          <h1 className="font-[Norwester] text-center">TEASER</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, cumque velit perspiciatis impedit, et incidunt amet a accusamus aspernatur molestiae facere esse minima, delectus ipsam suscipit soluta cupiditate porro magnam.</p>
        </div>
      </div>
    </section>
    <section className="stars" style={{ height: "max-content ", overflowX: "hidden",overflowY:"hidden" }}>
    <h1 className="font-[Norwester] text-white text-center mt-10" style={{fontSize:"4rem"}}>Our Guests</h1>
      <div className="h-max items-center flex flex-row-reverse pt-10 pb-10 starsmain">
        <div className="music-box h-[90vh] relative right-[-7vw]">
          <img src={require("../images/music-speaker.png")} className="h-[100%]" alt="" />
        </div>
        <div className="h-max artists">
          {starsArray.map((item) => (
            <div className="flex flex-row items-start justify-center starsarray" key={item.image}>
              <div className="left mr-16">
                <img src={`https://res.cloudinary.com/dyusmsyij/image/upload/v1677436282/images/anugoonj/${item.image}`} className="artist_image" alt="" />
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

      <Footer/>

    </section>
  </div>
  );
};



export default Home;
