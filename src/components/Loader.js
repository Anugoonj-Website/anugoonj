import React from 'react'
import "../styles/loader.css";

function Loader(props)
{
    let heading = props.heading;
    console.log(heading)
    return(
        <div className='loader'>
            <h1 className='loader_heading'>{heading}</h1>
        </div>
    )
}

export default Loader;