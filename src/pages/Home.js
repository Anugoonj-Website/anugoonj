import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/home.css";
import arman_malik from "../images/am3.png";


const Home = () => {
    return(
        <div className='home'>
            <div className='home_inside'>
                <div className='home_page_label'>
                    <h1 className='home_page_label_anugoonj'>ANUGOONJ</h1>
                </div>
                <img src={arman_malik} alt="img" className='home_arman_malik_image'/>
            </div>
        </div>
    );
}

export default Home