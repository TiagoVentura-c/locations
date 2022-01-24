import React from 'react';

import "./Users.css"

 function Users(){
    return(
        <>
            <div className='user-titles'>
                <h5>Tiago Ventura</h5>
                <h5>tfj.ventura@gmail.com</h5>
                
                <div className='user-coord'>
                    <h5>[-2,5445; -2,454]</h5>
                    <button className='user-btn-see'>Ver no mapa</button>
                </div>
                
            </div>
            <div className='user-line'></div>
        </>
    )
}

export default Users;