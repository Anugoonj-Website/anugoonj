import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Sponsor from "./pages/Sponsor";
import Legacy from "./pages/Legacy";
import Contact from "./pages/Contact";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
