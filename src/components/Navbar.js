import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/anugoonj_logo.png';
import '../styles/navbar.css';


const Navbar = () => {
    return (

        <>
            <div className='navbar'>
                <img src={logo} alt="img" className='logo_img'/>

                <div className='navbar_links'>
                    <NavLink className="navbar-link" to="/">Home</NavLink>
                    <NavLink className="navbar-link" to="/">Events</NavLink>
                    <NavLink className="navbar-link" to="/">Sponsors</NavLink>
                    <NavLink className="navbar-link" to="/">Legacy</NavLink>
                    <NavLink className="navbar-link" to="/">Contact Us</NavLink>
                </div>

            </div>
        </>
    );
}

export default Navbar;