import React, { useState } from 'react'

import "./styles.css"
import Input from "../components/Input";
import SelectInput from '../components/SelectInput';
import Location from '../components/Location';
import { LocationData } from '../types';

type Props = {
    nameInput: string;
    typeInput: string;
}

 function Add(){

    type Props = {
            country: string;
            cities: string[];
    }

    const data: Props[] = [
        {
            country: "Afghanistan",
            cities: [
                "Shar",
                "Sharif",
                "Wazir Akbar Khan",
                "Xxxx"
            ]
        },
        {
            country: "Angola",
            cities: [
                "Malanje",
                "Cabinda",
                "Luanda"
            ]
        },
        {
            country: "Brasil",
            cities: [
                "Rio de Janeiro",
                "Brasilia"
            ]
        },
    ]

    const [orderLocation, setLocation] = useState<LocationData>();

    return(
        <div className='add-container'>
            <h3 className='add-title'>Insira seus dados:</h3>
            <div className='add-content'>
                <Input nameInput='Nome' typeInput='text' />
                <Input nameInput='Email' typeInput='email' />
                <SelectInput countries={data} />
                <Location onChangeLocation={location => setLocation(location) } />
                <div className='add-content-detail'>
                    <button className='add-btn' >Obter localização do dispositivo</button>
                    <text className='add-cord-content'>
                        Suas cordenadas [ -2,7445; 4.2666 ]
                    </text>
                </div>
                <button className='add-btn-save' >Salvar</button>
            </div>
        </div>
    )
}

export default Add;