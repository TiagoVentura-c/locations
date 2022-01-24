import React from 'react';
import { User } from '../types';

import "./Users.css"

type Props = {
    user: User
    handleSelectUser: (id: number) => void
}

 function Users({user, handleSelectUser}: Props){
    return(
        <>
            <div className='user-titles'>
                <h5>{user.name}</h5>
                
                <div className='user-coord'>
                    <h5>[{user.locationData.latitude}; {user.locationData.longitude}]</h5>
                    <button className='user-btn-see' onClick={() => handleSelectUser(user.id)}>Ver no mapa</button>
                </div>
                
            </div>
            <div className='user-line'></div>
        </>
    )
}

export default Users;