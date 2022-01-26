import React, { useEffect, useState } from 'react';

import Table from '../Components/Table/Table'
import { DateRange, Range } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import "./styles.css"
import { User } from '../../types';
import SetLocaltion from '../../Locations/SetLocation';
import { fetchUsers, fetchUsersDate } from '../../api';
import { toast } from 'react-toastify';

function HomeAdmin () {

    useEffect(()=>{
      fetchUsers()
      .then(response => {
          setUsers(response.data)
      })
      .catch(error => {
          toast.error("Falha ao carregar usuarios"+ error)
      })

    }, [])

  const [users, setUsers] = useState<User[]>([]);

  const [state, setState] = useState<Range>(
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  );
  
  const [show, setShow] = useState<boolean>(false);

    const handleSelectUser = (id: number) => {
      for(var i =0; i < users.length; i++){
        if(users[0].id === id){
            setUserSelected(users[i]);
        }
    }
  }

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

  function handleSearch(){
    
    const startDate = state.startDate?.toISOString().split('T')[0]
    const endDate = state.endDate?.toISOString().split('T')[0]

    fetchUsersDate(startDate as string, endDate as string)
      .then(response => {
          setUsers(response.data)
      })
      .catch(error => {
          toast.error("Erro ao buscar por data")
      })

  }

  return (
    <div className='home-admin-container'>
      <div className='home-admin-content'>

        <div className='admin-filter-area'>
          <div className='admin-date-range'>
            <button className='admin-btn-date' onClick={() => setShow(!show) }>Selecione uma data</button>
            <div className='select-date'>
            {
              show ? 
                <DateRange
                editableDateInputs={true}
                onChange={item => {
                  setState(item.selection); 
                }}
                moveRangeOnFirstSelection={false}
                ranges={[state]}/> : <div></div>
            } </div> 
          </div>
          <button className='admin-btn-search' onClick={ () => handleSearch() }>Buscar</button>
        </div>

        <Table users={users} handleSelectUser={handleSelectUser} /> 
        <SetLocaltion user={userSelected} /> 
      </div>
    </div>
  )
}

export default HomeAdmin;