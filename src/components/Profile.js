import React from 'react';
import "../styles/profile.css";

function profile(props) {
    return (
        <div className='profile'>

            <img src={require("../images/profile_image/default.jpg")} alt='profile_image' className='profile_image' />
            <div className='profile_details'>
                <h4>Sonu Singla</h4>
                <h6>Web-Devloper</h6>
            </div>

        </div>
    )

}

export default profile;