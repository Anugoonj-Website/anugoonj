import React from 'react'
import "../styles/home.css";
import arman_malik from "../images/am3.png";
import arrow from '../images/arrow.gif';


const Home = () => {
    return(
        <div className='home'>
            <div className='home_inside'>
                <div className='home_page_label'>
                    <h1 className='home_page_label_anugoonj'>ANUGOONJ</h1>
                </div>
                <img src={arman_malik} alt="img" className='home_arman_malik_image'/>

                <div className='home_arrow'>
                    <img src={arrow} alt="arrow" className='home_down_arrow' />
                </div>
            </div>
        </div>
    );
}

export default Home