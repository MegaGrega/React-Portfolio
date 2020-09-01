
import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import Navbar from 'react-bootstrap/Navbar'
function Header() {
    return (
        <div className ="navBar">
            <Link className = "navItem" to="/about"> About </Link>
            <Link className = "navItem" to="/portfolio"> Portfolio </Link>
            <Link className = "navItem" to="/contact">Contact</Link>
        </div>

    )
}

export default Header;