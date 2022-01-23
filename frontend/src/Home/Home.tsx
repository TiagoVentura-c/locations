import React from 'react';
import { Link } from 'react-router-dom';

import {  } from "react-icons";

import "./styles.css"

 function Home(){
    return(
        <div className='home-container'>
            <div className='home-content'>
                    <Link to="add" className='home-btn'>Nova localização</Link>
                    <Link to="locations" className='home-btn'>Ver localizações cadastradas</Link>
            </div>
        </div>
    )
}

export default Home;