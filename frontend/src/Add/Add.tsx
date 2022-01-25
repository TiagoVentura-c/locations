import React, { useState } from 'react'

import "./styles.css"
import Input from "../components/Input";
import SelectInput from '../components/SelectInput';
import Location from '../components/Location';
import { LocationData, Residence, User } from '../types';
import { toast } from 'react-toastify';

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

    const [name, setName] = useState<string>('')

    const user = useState<User>()

    const [location, setLocation] = useState<LocationData>();
    
    const handleOnChange = (e: string) => {
        setName(e)
    }

    const [redidence, setRedidence] = useState<Residence>({
        country: data[0].country,
        city: data[0].cities[0]
    })

    const handleSave = () => {
        
        if(name === ''){
            toast.error("Defina seu nome")
        }
        if(location === undefined){
            toast.error("Escolha sua localização")
        }

        if(name !== '' && location!==undefined){
            toast.info("Sucesso")
        }
    }

    

    return(
        <div className='add-container'>
            <h3 className='add-title'>Insira seus dados:</h3>
            <div className='add-content'>
                <Input nameInput='Nome' typeInput='text' handleOnChange={handleOnChange} />
                <SelectInput onChangeResidence={redidence => setRedidence(redidence) } countries={data} />

                <Location onChangeLocation={location => setLocation(location)} />
                <button className='add-btn-save' onClick={handleSave} >Salvar</button>
            </div>
        </div>
    )
}

export default Add;