import React from 'react'
import "../styles/team.css";
import Profile from '../components/Profile';

function team() {
    return (
        <div className='team'>
            <Profile />
            <Profile />
            <Profile />
        </div>
    )
}

export default team;