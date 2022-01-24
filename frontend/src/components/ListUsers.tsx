import React from 'react'
import { User } from '../types';
import Users from './Users';

type Props = {
    users: User[]
    handleSelectUser: (id: number) => void
}



 function ListUsers({ users, handleSelectUser }: Props){
    return(
        <div className='list-user-container'>
            <div className='list-user-content'>
                {
                    users.map(user => (
                   <Users 
                        user={user}
                        handleSelectUser={handleSelectUser}
                   /> 
                   ))
                }
                
            </div>
        </div>
    )
}

export default ListUsers;