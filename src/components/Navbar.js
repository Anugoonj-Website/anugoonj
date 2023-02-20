import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/anugoonj_logo.png';
import '../styles/navbar.css';


const Navbar = () => {
    return (

        // <>
        //     <div classNameName='navbar'>
        //         <img src={logo} alt="img" classNameName='logo_img'/>

        //         <div classNameName='navbar_links'>
        //             <NavLink classNameName="navbar-link" to="/">Home</NavLink>
        //             <NavLink classNameName="navbar-link" to="/">Events</NavLink>
        //             <NavLink classNameName="navbar-link" to="/">Sponsors</NavLink>
        //             <NavLink classNameName="navbar-link" to="/">Legacy</NavLink>
        //             <NavLink classNameName="navbar-link" to="/">Contact Us</NavLink>
        //         </div>

        //     </div>
        // </>
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt="img" classNameName='navbar-brand' width="120" height="130"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav pe-5">
                            <li className="nav-item ps-4 text-bold">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item ps-4 text-bold">
                                <NavLink className="nav-link" to="#">Events</NavLink>
                            </li>
                            <li className="nav-item ps-4 text-bold">
                                <NavLink className="nav-link" to="#">Sponsors</NavLink>
                            </li>
                            <li className="nav-item ps-4 text-bold">
                                <NavLink className="nav-link" to="#">Team</NavLink>
                            </li>
                            <li className="nav-item ps-4 text-bold">
                                <NavLink className="nav-link" to="#">Legacy</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;