import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
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
          <Route path="/events" element={<Event />} />
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
