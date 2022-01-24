import React from 'react'
import Users from './Users';

 function ListUsers(){
    return(
        <div className='list-user-container'>
            <div className='list-user-content'>
                <Users />
            </div>
        </div>
    )
}

export default ListUsers;