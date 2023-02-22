import React from 'react'
import '../styles/smallEventRight.css'
import "../styles/circle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faClock} from '@fortawesome/free-solid-svg-icons'

const smallEventRight = () => {
  return (
    <div className='right_event_body'>
       
       <div className='event_content_right '>
       <h1 className='event_heading'>event1</h1>
       <p className='event_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores epturi.</p>
       <div className='location_time'>
         <div><FontAwesomeIcon icon={faLocationDot}/> Location : D-Block</div>
         <div className='event_time'><FontAwesomeIcon icon={faClock}/> Time : 2:30 Pm</div>
       </div>

     </div>
     <div class="box right_circle"></div>

    
 </div>
  )
}

export default smallEventRight