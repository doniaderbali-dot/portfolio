import React from 'react'
import './Navbar.css'
import logo from "../assets/logo1.png";
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="3" className="logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About </li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">connect with me</div>

        </div>
    )
}

export default Navbar
