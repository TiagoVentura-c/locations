import React, { useState } from 'react';

import Table from './Components/Table/Table'
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';

function HomeAdmin () {
  
  type State ={
      startDate: Date;
      endDate: null;
      key: string;
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className='home-admin-container'>
      <div className='home-admin-content'>
      <DateRange
        editableDateInputs={true}
        //onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        //ranges={state}
      />
      </div>
    </div>
  )
}

export default HomeAdmin;