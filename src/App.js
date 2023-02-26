import "./App.css";
import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Events_Component from "./components/Events";
import Sponsor from "./pages/Sponsor";
import Teams from "./pages/Teams";
import events_data from "./data/events.json"
import teams_data from "./data/team.json";
import Milestones from "./pages/Milestones";
import Team from "./components/Team";
import Cardcarousel from "./components/Carousel";
import loader from './images/anugoonj_loader.mp4';

function App() {

  const [loading, setLoading] = useState(true);
  // const [loader_display ,setLoaderDisplay]= useState("none");
  const website_loader = useRef();
  useEffect(()=>{
    setLoading(true);
  }, []) 

  // const loader_video = ()=>{
  //   setLoaderDisplay("block");
  //   website_loader.current.play();
  // }

  const Milestones_Data =[
    "Benny Dayal |  Punjabi singer Guri | Sankraman Band | Kavi Sammelan by Ashok Chakaradhar | Talent Hunt",
    "Kailash Kher | Bhangra performance | Street plays | Talent competition for specially abled students | Bands Pakshee and Fiddlecraft",
    "KK (Krishnakumar Kunnath)| DJ night with DJ Shiva | Nasha band | Akhil Sachdeva | Street plays | Jam sessions"
  ]
  
  return (
    <>

      {
        loading ?
        <div className="video_div">
        <video ref={website_loader} className="anugoonj_loader" playsInline muted autoPlay  onEnded={()=>{setLoading(false)}}>
          <source  src={loader} type="video/mp4" />
        </video>
        </div>
        : 
        (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} >
            <Route index element={<Navigate to="day_1" />} />
            <Route path="day_1" element={<Events_Component day="1" date="2nd" data={events_data.day_1}  />} />
            <Route path="day_2" element={<Events_Component day="2" date="3rd" data={events_data.day_2} />} />
            <Route path="day_3" element={<Events_Component day="3" date="4th" data={events_data.day_3} />} />
          </Route>

          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/team" element={<Teams />} >
            <Route index element={<Navigate to="organising" />} />
            <Route path="organising" element={<Team data={teams_data.organising}/>} />
            <Route path="web" element={<Team data={teams_data.web}/>} />
            <Route path="disipline" element={<Team data={teams_data.disipline}/>} />
            <Route path="hospitality" element={<Team data={teams_data.hospitality}/>} />
            <Route path="office" element={<Team data={teams_data.office}/>} />
            <Route path="mr_and_ms_anugoonj" element={<Team data={teams_data.office}/>} />
            <Route path="ground" element={<Team data={teams_data.ground}/>} />
            <Route path="media" element={<Team data={teams_data.media}/>} />
          </Route>
          <Route path="/milestones" element={<Milestones />} >
            <Route index element={<Navigate to="2023" />} />
            <Route path="2023" element={<Cardcarousel tage_line={Milestones_Data[0]} year={"2023"}/>} />
            <Route path="2020" element={<Cardcarousel tage_line={Milestones_Data[0]} year={"2020"}/>} />
            <Route path="2019" element={<Cardcarousel tage_line={Milestones_Data[1]} year={"2019"}/>}/>
            <Route path="2018" element={<Cardcarousel tage_line={Milestones_Data[2]} year={"2018"}/>} />
          </Route>
        </Routes>
      </Router>

      )}

    </>
  );
}

export default App;
