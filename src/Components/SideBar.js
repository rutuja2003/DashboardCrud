import React from "react";
import {NavLink} from 'react-router-dom'
function SideBar(){
    return(
        <>
        <div className="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassName="active" to="/Dashboard/Home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassName="active" to="/Dashboard/About">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassName="active" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassName="active" to="/contact">Contact</NavLink>
                </li>
                
            </ul>
        </div>
        </>
    );
}export default SideBar;