import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Events_Component from "./components/Events";
import Sponsor from "./pages/Sponsor";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Milestones from "./pages/Milestones";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} >
            <Route index element={<Navigate to="day_1" />} />
            <Route path="day_1" element={<Events_Component day="1" date="2nd"/>}/>
            <Route path="day_2" element={<Events_Component day="2" date="3rd"/>}/>
            <Route path="day_3" element={<Events_Component day="3" date="4th"/>}/>
          </Route>
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/milestones" element={<Milestones />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
