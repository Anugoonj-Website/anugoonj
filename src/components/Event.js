import React from 'react'
import '../styles/event.css'
import '../styles/circle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faClock} from '@fortawesome/free-solid-svg-icons'
import temp from "../images/temp2.png";


const Event = (props) => {
  return (
    <div className='left_event_body'>
       
       {/* <div class="box">
        <img src={temp}/>
       </div> */}
       <img src={temp} className="image"/>
          <div className='event_content event_conent_bondary'>
          <h1 className='event_heading'>event1</h1>
          <p className='event_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores epturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores epturi</p>
          <div className='location_time'>
            <div><FontAwesomeIcon icon={faLocationDot}/> Location : D-Block</div>
            <div className='event_time'><FontAwesomeIcon icon={faClock}/> Time : 2:30 Pm</div>
          </div>
        </div>
       
    </div>
  )
}

export default Event   