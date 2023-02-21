import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/home.css";
import arman_malik from "../images/arman_malik.png";


const Home = () => {
    return(
        <div className='home'>
            <div className='home_inside'>
                <img src={arman_malik} alt="img" className='home_arman_malik_image'/>
            </div>
        </div>
    );
}

export default Home