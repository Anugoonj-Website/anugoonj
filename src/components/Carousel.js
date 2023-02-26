import React from "react";
import "../styles/milestones.css";
import Image from "../components/Milstone_image";


const Cardcarousel = (props) => {

  const temp_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
 

  return (
    <>

      <br></br>
      <p className="sponsors_paragraph milstone_paragraph" style={{ fontSize: "smaller" }}>{props.tage_line}</p>

      <br></br>
      <br></br>
      <div className="slider">
        <div className="slider_track">

          {temp_array.map((e,index)=>{
            return (<Image url={`${props.year}/milstone_${props.year}_${index+1}.jpeg`} />);
          })}

        </div>
      </div>
    </>);
};

export default Cardcarousel;
