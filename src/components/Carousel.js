import React from "react";
import "../styles/milestones.css";
import Image from "../components/Milstone_image";


const Cardcarousel = (props) => {

  return (
    <>

      <br></br>
      <p className="sponsors_paragraph milstone_paragraph" style={{ fontSize: "smaller" }}>{props.tage_line}</p>

      <br></br>
      <br></br>

      <div className="slider">
        <div className="slider_track">
          <Image url={`${props.year}/milstone_${props.year} (1).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (2).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (3).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (4).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (5).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (1).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (2).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (3).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (4).jpg`} />
          <Image url={`${props.year}/milstone_${props.year} (5).jpg`} />
        
        </div>
      </div>
    </>);
};

export default Cardcarousel;
