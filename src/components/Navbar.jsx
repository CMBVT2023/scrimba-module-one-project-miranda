/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";
import logo from '../images/react-icon-small.png';

export default function Navbar() {
    return (
        <nav className='nav-container'>
            <img className='nav-logo' src={logo} />
            <h3 className='nav-page-title'> React Facts </h3>
            <h4 className='nav-project-title'>React Course Project-1</h4>
        </nav>
    )
}