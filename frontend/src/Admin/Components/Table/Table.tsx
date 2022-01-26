import React from 'react';
import MaterialTable, {  }  from 'material-table'
import { Button } from '@material-ui/core';

import "./styles.css"
import { User } from '../../../types';


  type Props = {
    users: User[]
    handleSelectUser: (id: number) => void
  }

function Table({ users, handleSelectUser }: Props) {

    return (
      <div className='table-container'>
        <div className='table-content'>
      <MaterialTable
        style={{
          backgroundColor: 'rgb(185, 172, 162)',
          border: '1px solid rgb(229, 153, 0)'
        }}
        title="Localizações cadastradas"
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'País', field: '.residence.country' },
          { title: 'Cidade', field: '.residence.city' },
          { title: 'Lat', field: '.locationData.latitude'},
          { title: 'Lng', field: '.locationData.longitude'}
          
        ]}
        data={users}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => handleSelectUser(((rowData as User).id))
          }
        ]}
        components={{
          Action: props => (
            <Button
              onClick={(event) => props.action.onClick(event, props.data)}
              color="primary"
              variant="contained"
              style={{textTransform: 'none', backgroundColor: 'rgb(211, 141, 7)'}}
              size="small"
            >
              Ver no mapa
            </Button>
          ),
        }}
      />
      </div>
      </div>
    )
  }

export default Table;