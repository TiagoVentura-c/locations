import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Table from '../Admin/Components/Table/Table';
import { fetchUsers } from '../api';
import { User } from '../types';
import SetLocaltion from './SetLocation';
import "./styles.css"

 function Locations(){
    
     useEffect(()=>{
         fetchUsers()
         .then(response => {
             setUsers(response.data)
         })
         .catch(error => {
             toast.error("Falha ao carregar usuarios")
         })
 
     }, [])

    const [users, setUsers] = useState<User[]>([]);


    const [userSelected, setUserSelected] = useState<User>({
        id:0,
        name: "",
        locationData:{
            address: '',
            longitude: -8.914669,
            latitude: 13.157245
        },
        residence:{
            city: "",
            country: ""
        }
    });

    const handleSelectUser = (id: number) => {
        for(var i =0; i < users.length; i++){
            if(users[i].id === id){
                setUserSelected(users[i]);
            }
        }

        console.log(userSelected)
    }

    return(
        <div className='locations-container'>
            <div className='locations-content'>
                <Table users={users} handleSelectUser={handleSelectUser} /> 
                <SetLocaltion user={userSelected} />                            
            </div>
        </div>
    )
}

export default Locations;