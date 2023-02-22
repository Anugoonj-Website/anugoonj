import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Events_Component from "./components/Events";
import Sponsor from "./pages/Sponsor";
import Legacy from "./pages/Legacy";
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
            <Route path="day_1" element={<Events_Component/>}/>
            <Route path="day_2" element={<Events_Component/>}/>
            <Route path="day_3" element={<Events_Component/>}/>
          </Route>
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/milestones" element={<Milestones />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
