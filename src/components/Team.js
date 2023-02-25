import React, { useEffect, useState } from 'react'
import "../styles/team.css";
import Profile from '../components/Profile';
import { useMediaQuery } from '@react-hook/media-query';


function Team(props) {
    const core = props.data.core;
    const members = props.data.members;
    const length_core = core.length;
    const length_members = members.length;

    const [glc,SetGlc]  = useState(4);
    const [glm,SetGlm]  = useState(6);

    const isTablet = useMediaQuery('only screen and (max-width: 768px)');
    const isPhone = useMediaQuery('only screen and (max-width: 540px)');
    const isSmallPhone = useMediaQuery('only screen and (max-width: 450px)');


    useEffect(()=>{
       
        if(isSmallPhone)
        {
            SetGlc(2);
            SetGlm(3);
        }
        else if(isPhone)
        {
            SetGlc(2);
            SetGlm(4);
        }
        else if(isTablet)
        {
            SetGlc(3);
            SetGlm(5);
        }
        else
        {
            SetGlc(4);
            SetGlm(6);
        }    

    },[isTablet,isPhone,isSmallPhone])
   

    
    const core_data = createGroups(core, Math.ceil(length_core / glc));
    const members_data = createGroups(members, Math.ceil(length_members / glm));
    // console.log(core_data);




    return (
        <>
            <div className='team'>

                <h4 className='core_team_heading'>Core Team Members</h4>
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
            <div className='team'>
                <h4 className='core_team_heading'>Team Members</h4>
                
                {
                    members_data.map((element) => {
                        return (
                            <div className='group_team_memebers'>
                                {element.map((e) => {
                                    return (<div>{e.name}</div>);
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