import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'


const Home = () => {
    return(
        <div>
            <Navbar />
        </div>
    );
}

export default Home