import React from 'react'
import "./Navbar.css"
import SunLine from "../assets/sun-line.png"
import MoonLine from "../assets/moon-line.png"
const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className='theme-toggle'>
                <img src={SunLine} alt="" />
                <img src={MoonLine} alt="" />
            </div>
        </div>
    )
}

export default Navbar
