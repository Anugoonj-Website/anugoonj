import React from 'react'

function Image(props)
{
    const url = props.url;
    console.log(url);
    return(
        <div className='milstone_image_container slide'>
            <img src={`https://res.cloudinary.com/dyusmsyij/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1677576574/images/milestone_image/${url}`} className="milstone_image" alt="Image"/>
        </div>
    )

}

export default Image;