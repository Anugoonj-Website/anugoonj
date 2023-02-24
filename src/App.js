import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Events_Component from "./components/Events";
import Sponsor from "./pages/Sponsor";
import Teams from "./pages/Teams";
import events_data from "./data/events.json"
import Milestones from "./pages/Milestones";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} >
            <Route index element={<Navigate to="day_1" />} />
            <Route path="day_1" element={<Events_Component day="1" date="2nd" data={events_data.day_1} />} />
            <Route path="day_2" element={<Events_Component day="2" date="3rd" data={events_data.day_2} />} />
            <Route path="day_3" element={<Events_Component day="3" date="4th" data={events_data.day_3} />} />
          </Route>

          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/team" element={<Teams />} >
            <Route index element={<Navigate to="organising" />} />
            <Route path="organising" element={<Team/>} />
            <Route path="disipline" element={<Team/>} />
            <Route path="hospitality" element={<Team/>} />
            <Route path="office" element={<Team/>} />
            <Route path="ground" element={<Team/>} />
            <Route path="media" element={<Team/>} />
          </Route>
          <Route path="/milestones" element={<Milestones />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
