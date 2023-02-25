import React from 'react';
import "../styles/profile.css";

function profile(props) {
    const data = props.data;
    return (
        <div className='profile'>

            <img src={require(`../images/profile_image/${data.image}`)} alt='profile_image' className='profile_image' />
            <div className='profile_details'>
                <h4>{data.name}</h4>
                <h6>{data.position}</h6>
            </div>

        </div>
    )

}

export default profile;