import React from 'react';
import "../styles/profile.css";

function profile(props) {
    const data = props.data;
    return (
        <div className='profile'>

            <img src={`https://res.cloudinary.com/dyusmsyij/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1677567699/images/profile_image/${data.image}`} alt='profile_image' className='profile_image' />
            <div className='profile_details'>
                <h4>{data.name}</h4>
                <h6>{data.position}</h6>
            </div>

        </div>
    )

}

export default profile;