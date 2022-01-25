import React, { useState } from 'react'
import Table from '../Admin/Components/Table/Table';
import ListUsers from '../components/ListUsers';
import { User } from '../types';
import SetLocaltion from './SetLocation';
import "./styles.css"

type Place = {
    label?: string;
    value?: string;
    position:{
        lat: number;
        lng: number;
    }
}

 function Locations(){
    
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'Tiago Ventura',
            residence: {
                country: 'Angola',
                city: 'Luanda'
            },
            locationData: {
                address: 'Angola, luanda, talatona',
                latitude: -8.9146692,
                longitude: 13.1572451,
            }
        },
        {
            id: 2,
            name: 'Renan Araujo',
            residence: {
                country: 'Brasil',
                city: 'Rio de Janeiro'
            },
            locationData: {
                address: 'Brasil, rio',
                latitude: -12.58,
                longitude: 13.40778
            }
        },
        {
            id: 3,
            name: 'Fabio Julian',
            residence: {
                country: 'Portugar',
                city: 'Lisboa'
            },
            locationData: {
                address: 'Porto, linha',
                latitude: -5.87,
                longitude: 1.6456
            }
        },
    ]);

    const [userSelected, setUserSelected] = useState<User>(users[0]);

    const handleSelectUser = (id: number) => {
        users.map(user => {
            if(user.id === id){
                setUserSelected(user);
            }
        })
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