import React, { useEffect, useState } from 'react';

import Table from '../Components/Table/Table'
import { DateRange, Calendar, DateRangePicker, Range } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import "./styles.css"
import { User } from '../../types';
import SetLocaltion from '../../Locations/SetLocation';
import Locations from '../../Locations/Locations';

function HomeAdmin () {
 
  const [state, setState] = useState<Range>(
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  );


      const selectionRange: Range = {
        key: 'selection',
        color: 'red'
      }

      const [show, setShow] = useState<boolean>(false);


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

    const handleSelectUser = (id: number) => {
      users.map(user => {
          if(user.id === id){
              setUserSelected(user);
          }
      })
  }
  const [userSelected, setUserSelected] = useState<User>(users[0]);

  const [textDate, setTextDate] = useState<string>('Selecione uma data');

  return (
    <div className='home-admin-container'>
      <div className='home-admin-content'>

        <div className='admin-filter-area'>
          <div className='admin-date-range'>
            <button className='admin-btn-date' onClick={() => setShow(!show) }>{textDate}</button>
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
          <button className='admin-btn-search' onClick={() => console.log(state) }>Buscar</button>
        </div>

        <Table users={users} handleSelectUser={handleSelectUser} /> 
        <SetLocaltion user={userSelected} /> 
      </div>
    </div>
  )
}

export default HomeAdmin;