import React from 'react'
import "../styles/team.css";
import Profile from '../components/Profile';

function team(props) {
    const core_memeber_data = props.data.core;
    const memebers_data = props.data.memebers;

    
    return (
        <>

        {
            // ()=>{
            //     const details =[];
            //     // while(i<core_memeber_data.length)
            //     // {
            //     //     details.add()
                    
            //     // }
            // }
        }
         <div className='team'>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </div>
        </>
       
    )
}


function createGroups(arr, numGroups) {
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(numGroups)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

export default team;