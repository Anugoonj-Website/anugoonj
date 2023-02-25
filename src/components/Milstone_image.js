import React from 'react'
import "../styles/milstone_image.css";

function Image(props)
{
    const url = props.url;
    console.log(url);
    return(
        <div className='milstone_image_container'>
            <img src={require(`../images/milestone_image/${url}`)} className="milstone_image" alt="Image"/>
        </div>
    )

}

export default Image;