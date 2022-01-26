import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchCountries } from '../api';
import { Residence } from '../types';

import "./SelectInput.css"

type Props = {
    country: string;
    cities: string[];
}


type listProps = {
   // countries: dataProps[];
    onChangeResidence: (selectedResidence: Residence) => void
}

function SelectInput( {onChangeResidence}: listProps){

    const[countries, setContries] = useState<Props[]>([
        {
            country: "Afghanistan",
            cities: [
                "Shar",
            ]
        }
    ])

    useEffect(()=> {
         function fetch() {
             fetchCountries()
            .then(response => {
                setContries(response.data.data)
            })
            .catch(error=>{
                toast.error("Erro ao carregar países")
            })
        } 
           fetch(); 
        
    }, [])

    const [cities, setCities] = useState<string[]>(countries[0].cities);
    const [indexSelectedCountry, setIndexSelectedCountry] = useState(0);


    const handleSelectCountry = (element: any) => {
        onChangeResidence({
            country: countries[element.currentTarget.selectedIndex].country,
            city: countries[element.currentTarget.selectedIndex].cities[0]
        })
        setIndexSelectedCountry(element.currentTarget.selectedIndex);
        setCities(countries[indexSelectedCountry].cities);
    }
    
    const handleSelectCity = (element: any) => {
        onChangeResidence({
            country: countries[indexSelectedCountry].country,
            city: element.currentTarget.value
        })
    }     
    
    return(
        <div className='select-container'>
            <div className='select-content' >
                <div className='select-area'>
                    <label htmlFor="select-select" className='select-name'>País:</label>
                    <select name="select" className="select-select" onChange={(element) => handleSelectCountry(element) }>
                        { countries.map(el => (
                            <option className='select-option' value={el.country}>{el.country}</option>
                        ))}
                    </select>
                </div>

                <div className='select-area'>
                    <label htmlFor="select-selects" className='select-name' >Cidade:</label>
                    <select name="select-city" className="select-select" value={countries[indexSelectedCountry].cities[0]} onChange={(element) => handleSelectCity(element) }>
                        { cities.map(city => (
                            <option className='select-option' value={city} >{city}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default SelectInput;
