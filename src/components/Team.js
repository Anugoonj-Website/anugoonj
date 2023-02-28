import React, { useEffect, useState } from 'react'
import "../styles/team.css";
import Profile from '../components/Profile';
import { useMediaQuery } from '@react-hook/media-query';


function Team(props) {
    const core = props.data.core;
    const length_core = core.length;

    const [glc,SetGlc]  = useState(4);

    const isTablet = useMediaQuery('only screen and (max-width: 768px)');
    const isPhone = useMediaQuery('only screen and (max-width: 540px)');
    const isSmallPhone = useMediaQuery('only screen and (max-width: 450px)');


    useEffect(()=>{
       
        if(isSmallPhone)
        {
            SetGlc(2);
        }
        else if(isPhone)
        {
            SetGlc(2);
        }
        else if(isTablet)
        {
            SetGlc(3);
        }
        else
        {
            SetGlc(4);
        }    

    },[isTablet,isPhone,isSmallPhone])
   

    
    const core_data = createGroups(core, Math.ceil(length_core / glc));

    return (
        <>
            <div className='team'>
             
              <h4 className='font-[Norwester] core_team_heading'>{props.data.name}</h4>
                {
                    core_data.map((element) => {
                        return (
                            <div className='group_team'>
                                {element.map((e) => {
                                    return (<Profile data={e} />);
                                })}
                            </div>
                        )
                    })
                }

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

export default Team;