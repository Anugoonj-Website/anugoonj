import React from 'react'
import "../styles/home.css";
import arman_malik from "../images/am3.png";


const Home = () => {
    return (
        <div className='home'>
            <div className='home_inside'>
                <spam className='home_page_label'>
                    <h1 className='home_page_label_anugoonj'>ANUGOONJ</h1>
                </spam>
                <img src={arman_malik} alt="img" className='home_arman_malik_image' />
            </div>
            <div className='home_about_us'>
                

                <div class="animation-area">
                <h1 className='home_page_label_anugoonj'>About Us</h1>
                    <ul class="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Home