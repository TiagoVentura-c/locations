import React, { useState } from 'react'

import "./styles.css"
import Input from "../components/Input";
import SelectInput from '../components/SelectInput';
import Location from '../components/Location';
import { LocationData, Residence, User } from '../types';
import { toast } from 'react-toastify';
import { postUsers } from '../api';

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
        }
    ]

    const [name, setName] = useState<string>('')
    const [location, setLocation] = useState<LocationData>();
    
    const handleOnChange = (e: string) => {
        setName(e)
    }

    const [redidence, setRedidence] = useState<Residence>({
        country: data[0].country,
        city: data[0].cities[0]
    })

    const handleSave = () => {
        console.log(redidence)
        if(name === ''){
            toast.error("Defina seu nome")
        }
        if(location === undefined){
            toast.error("Escolha sua localização")
        }

        if(name !== '' && location!==undefined){

            const payload: User = {
                id: 0,
                name: name,
                locationData: location,
                residence: redidence
            }

            postUsers(payload)
                .then(response => {
                    toast.info("Sucesso")
                })
                .catch(error => {
                    toast.error("Erro ao salvar")
                })
                setName('')
                
        }
    }

    return(
        <div className='add-container'>
            <h3 className='add-title'>Insira seus dados:</h3>
            <div className='add-content'>
                <Input nameInput='Nome' typeInput='text' handleOnChange={handleOnChange} />
                <SelectInput onChangeResidence={redidence => setRedidence(redidence) } />

                <Location onChangeLocation={location => setLocation(location)} />
                <button className='add-btn-save' onClick={handleSave} >Salvar</button>
            </div>
        </div>
    )
}

export default Add;