import React from "react";
import "../styles/sponsors.css";
import EachSponsor from "../components/EachSponsor";

const Sponsor = () => {
  return (
    <div className="sponsors_page">
      <div className="sponsor_heading_box">
        <h1 className="sponsor_heading text-[50px] text-center text-[white]">Sponsors</h1>
      </div>

        <div className="eachSponsor">
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        <EachSponsor />
        </div>
        
    </div>
  );
};

export default Sponsor;
