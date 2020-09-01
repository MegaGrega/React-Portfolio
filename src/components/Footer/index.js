
import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import Navbar from 'react-bootstrap/Navbar'
function Footer() {
    return (
        <div className ="footer">
             <a className ="footerItem" href = "https://github.com/MegaGrega">Github</a>
             <br></br>
             <a className ="footerItem" href = "https://www.linkedin.com/in/matthew-grega-2047221b1/">LinkedIn</a>

        </div>

    )
}

export default Footer;