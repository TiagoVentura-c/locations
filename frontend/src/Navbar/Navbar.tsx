import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css"

 function Navbar(){
    return(
        <div className='navbar-content'>
            
            <Link to="/" className='logo-text'>Home</Link>
        </div>
    )
}

export default Navbar;